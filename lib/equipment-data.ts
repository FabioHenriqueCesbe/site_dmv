import { Truck, TowerControl as Tower, Hammer, Disc as Disc3, Construction } from "lucide-react"

export const equipmentList = [
    {
        title: "Torre de Monitoramento e Conectividade",
        slug: "torre-de-monitoramento-e-conectividade",
        icon: Tower,
        image: "/torre de monitoramento - fundo branco.png",
        description: "Solução autônoma e móvel para monitoramento e conectividade em áreas remotas. Equipada com câmeras de alta resolução, sistemas de iluminação e roteadores 4G/5G, ideal para canteiros de obras, eventos e mineração.",
        specs: {
            weight: "1.500 kg",
            dimensions: "2,5m x 1,8m x 9m (estendida)",
            function: "Monitoramento de segurança e fornecimento de conectividade em locais remotos."
        }
    },
    {
        title: "Caminhões Basculantes",
        slug: "caminhoes-basculantes",
        icon: Truck,
        image: "/Basculante - Fundo branco.png",
        description: "Caminhões robustos para transporte de materiais a granel, terraplanagem e mineração. Capacidade de carga variada para atender desde pequenas obras até grandes projetos de infraestrutura.",
        specs: {
            weight: "12.000 kg (Tara)",
            dimensions: "8,5m x 2,5m x 3,2m",
            function: "Transporte de terra, areia, brita e materiais de demolição."
        }
    },
    {
        title: "Caminhões Fora de Estrada",
        slug: "caminhoes-fora-de-estrada",
        icon: Truck,
        image: "/Fora de estrada (A30F - caminhão articulado) - Fundo branco.png",
        description: "Veículos de grande porte projetados especificamente para operações severas em mineração e grandes obras de terraplanagem. Alta capacidade de carga e durabilidade em terrenos acidentados.",
        specs: {
            weight: "45.000 kg (Tara)",
            dimensions: "10m x 4,5m x 4,8m",
            function: "Transporte de grandes volumes de carga em terrenos irregulares e minas."
        }
    },
    {
        title: "Manipuladores Telescópicos",
        slug: "manipuladores-telescopicos",
        icon: Construction,
        image: "/manipulador - fundo branco.png",
        description: "Equipamento versátil que combina as funções de guindaste e empilhadeira. Ideal para elevação e movimentação de cargas em canteiros de obras com difícil acesso.",
        specs: {
            weight: "7.500 kg",
            dimensions: "5,8m x 2,3m x 2,5m",
            function: "Elevação e posicionamento de materiais em alturas e alcances variados."
        }
    },
    {
        title: "Cravadores de Estacas",
        slug: "cravadores-de-estacas",
        icon: Hammer,
        image: "/cravadora de estaca - fundo branco.png",
        description: "Máquinas especializadas para cravação de estacas em fundações profundas. Precisão e força para garantir a estabilidade e segurança das estruturas.",
        specs: {
            weight: "25.000 kg",
            dimensions: "12m x 3,2m x 15m (torre erguida)",
            function: "Cravação de estacas pré-moldadas, metálicas ou pranchas para fundações."
        }
    },
    {
        title: "Bombas de Concreto",
        slug: "bombas-de-concreto",
        icon: Disc3,
        image: "/Bomba de concreto - fundo branco.png",
        description: "Equipamentos para bombeamento de concreto em longas distâncias ou alturas. Agilidade e eficiência na concretagem de lajes, pilares e fundações.",
        specs: {
            weight: "22.000 kg",
            dimensions: "11m x 2,5m x 3,8m",
            function: "Bombeamento contínuo de concreto para locais de difícil acesso ou elevados."
        }
    },
]
