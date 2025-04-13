"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const User_1 = require("./models/User");
const Project_1 = require("./models/Project");
const ProjectService_1 = require("./services/ProjectService");
const PaymentService_1 = require("./services/PaymentService");
const Donation_1 = require("./models/Donation");
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
const projectService = new ProjectService_1.ProjectService();
const paymentService = new PaymentService_1.PaymentService();
function ask(question) {
    return new Promise(resolve => rl.question(question, resolve));
}
async function main() {
    console.log('\n=== CREAR PROYECTO ===');
    const creatorName = await ask('Nombre del creador: ');
    const creatorEmail = await ask('Correo del creador: ');
    const projectTitle = await ask('Título del proyecto: ');
    const projectDesc = await ask('Descripción del proyecto: ');
    const category = await ask('Categoría (tecnológico/artístico/social): ');
    const goalStr = await ask('Meta financiera (USD): ');
    const goal = parseFloat(goalStr);
    if (isNaN(goal) || goal <= 0) {
        console.error('\n❌ Error: La meta financiera debe ser un número mayor a cero.');
        rl.close();
        return;
    }
    const deadlineStr = await ask('Fecha límite (YYYY-MM-DD): ');
    const deadlineDate = new Date(deadlineStr);
    if (deadlineDate < new Date()) {
        console.error('\n❌ Error: La fecha límite del proyecto no puede ser anterior a la fecha actual.');
        rl.close();
        return;
    }
    const rewardsStr = await ask('Recompensas (separadas por coma): ');
    const partialStr = await ask('Metas parciales (separadas por coma, ej: 200,500,800): ');
    const creator = new User_1.User('u1', creatorName, creatorEmail, true);
    const project = new Project_1.Project('p1', projectTitle, projectDesc, category, goal, deadlineDate, rewardsStr.split(',').map(r => r.trim()), creator);
    const partialGoals = partialStr.split(',').map(p => parseFloat(p.trim()));
    project.setPartialGoals(partialGoals);
    projectService.createProject(project);
    console.log('\nProyecto creado exitosamente ✅');
    const comment = await ask('¿Deseas dejar un comentario sobre el proyecto? (opcional): ');
    if (comment)
        project.addComment(comment);
    const update = await ask('¿Deseas escribir una actualización de progreso? (opcional): ');
    if (update)
        project.addUpdate(update);
    console.log('\n=== DONAR AL PROYECTO ===');
    const donorName = await ask('Nombre del donante: ');
    const donationAmountStr = await ask('Monto de la donación (USD): ');
    const donation = new Donation_1.Donation('d1', donorName, project.id, parseFloat(donationAmountStr));
    const certificate = paymentService.donate(donation, project);
    console.log('\n=== CERTIFICADO DE DONACIÓN ===');
    console.log(certificate.generateText());
    console.log(`\n📅 Fecha límite del proyecto: ${project.deadline.toLocaleDateString()}`);
    const progress = project.getProgress();
    const progressBarLength = 30;
    const filledLength = Math.round((progress / 100) * progressBarLength);
    const bar = '█'.repeat(filledLength) + '-'.repeat(progressBarLength - filledLength);
    // Colores ANSI (verde si llega al 100%)
    const colorStart = progress >= 100 ? '[32m' : ''; // Verde
    const colorEnd = progress >= 100 ? '[0m' : '';
    console.log(`📊 Progreso actual del proyecto: ${colorStart}[${bar}] ${progress.toFixed(2)}%${colorEnd}`);
    if (progress >= 100) {
        console.log('\n🎁 Usted ha recibido sus recompensas. ¡Gracias por apoyar el proyecto!');
    }
    console.log('\n🎯 Metas parciales:');
    console.log(project.checkReachedGoals().join('\n') || 'Ninguna meta alcanzada aún');
    console.log('\n💬 Comentarios ingresados:');
    project.comments.length
        ? project.comments.forEach((c, i) => console.log(`  ${i + 1}. ${c}`))
        : console.log('  No hay comentarios.');
    console.log('\n🔄 Actualizaciones del proyecto:');
    project.updates.length
        ? project.updates.forEach((u, i) => console.log(`  ${i + 1}. ${u}`))
        : console.log('  No hay actualizaciones.');
    rl.close();
}
main();
