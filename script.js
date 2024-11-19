// Importando a biblioteca se estiver usando módulos
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
    
// Inicializando o cliente Supabase
const supabaseUrl = 'https://qzhtchbgvrgvtbwkqgzc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6aHRjaGJndnJndnRid2txZ3pjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg2OTczMjMsImV4cCI6MjA0NDI3MzMyM30.WIv1tiWCwAWrE83jC9Ly_NeqvCdn8ZXAmH7_4-PvtQg';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

fetch('http://localhost:8080')

    .then(response => response.json())

    .then(data => console.log(data))

    .catch(error => console.log(error));

async function fetchApartamentos() {
    const { data, error } = await supabase
        .from('apartamentos') // Nome da tabela
        .select('*'); // Seleciona todas as colunas

    if (error) {
        console.error('Erro ao buscar apartamentos:', error);
    } else {
        displayApartamentos(data);
        console.log('Apartamentos:', data);
    }
}

function displayApartamentos(apartamentos) {
    const tableBody = document.getElementById('apartamentos-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Limpa o conteúdo atual

    apartamentos.forEach(apartamento => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${apartamento.responsavel}</td>
            <td>${apartamento.email}</td>
            <td>${apartamento.apartamento}</td>
            <td>${apartamento.bloco}</td>
            <td>${apartamento.tipo_residente}</td>
        `;
        tableBody.appendChild(row);
    });
}

fetchApartamentos();

