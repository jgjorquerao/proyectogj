<!doctype html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>Gyler Digital</title>
    <meta content="" name="description">
    <meta content="" name="keywords">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Favicons -->
    <link href="{{ asset('img/favicon.ico') }}" rel="icon">
    <!-- Google Fonts -->
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet">
    {{-- Vite carga los estilos de las librerías --}}
    @vite(['resources/js/app.js'])
</head>

<body class="dark-mode">
    <main id="main">
        @include('header_short')
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 mt-5 mb-5">
                    <style>
                        /* Estilos para el contenido de la política de privacidad */
                        .privacy-policy-content h3,
                        .privacy-policy-content h4 {
                            text-align: center;
                            /* Centra los títulos */
                        }

                        .privacy-policy-content p,
                        .privacy-policy-content li {
                            text-align: justify;
                            /* Justifica los párrafos y elementos de lista */
                        }
                    </style>

                    <div class="privacy-policy-content">
                        <h3><strong>Política de Privacidad para n8n</strong></h3>

                        <h4><strong>Política de Privacidad</strong></h4>
                        <p>Última actualización: 14 de agosto de 2025</p>
                        <p>Esta Política de Privacidad describe Nuestras políticas y procedimientos sobre la
                            recopilación, uso y divulgación de Su información cuando Usted utiliza el Servicio y le
                            informa sobre Sus derechos de privacidad y cómo la ley le protege.</p>
                        <p>Utilizamos Sus Datos Personales para proporcionar y mejorar el Servicio. Al utilizar el
                            Servicio, Usted acepta la recopilación y el uso de información de acuerdo con esta Política
                            de Privacidad. Esta Política de Privacidad ha sido creada con la ayuda del Generador de
                            Políticas de Privacidad.</p>

                        <h3><strong>Interpretación y Definiciones</strong></h3>
                        <h4><strong>Interpretación</strong></h4>
                        <p>Las palabras cuya letra inicial está en mayúscula tienen significados definidos bajo las
                            siguientes condiciones. Las siguientes definiciones tendrán el mismo significado
                            independientemente de si aparecen en singular o en plural.</p>

                        <h4><strong>Definiciones</strong></h4>
                        <p>Para los fines de esta Política de Privacidad:</p>
                        <ul>
                            <li><strong>Cuenta</strong> significa una cuenta única creada para que Usted acceda a
                                nuestro Servicio o partes de nuestro Servicio.</li>
                            <li><strong>Afiliado</strong> significa una entidad que controla, es controlada por, o está
                                bajo control común con una parte, donde "control" significa la propiedad del 50% o más
                                de las acciones, participación accionaria u otros valores con derecho a voto para la
                                elección de directores u otra autoridad de gestión.</li>
                            <li><strong>Aplicación</strong> se refiere a n8n, el programa de software proporcionado por
                                la Compañía.</li>
                            <li><strong>Compañía</strong> (referida como "la Compañía", "Nosotros", "Nos" o "Nuestro" en
                                este Acuerdo) se refiere a JJ Soluciones, Regimiento 1351.</li>
                            <li><strong>País</strong> se refiere a: Chile</li>
                            <li><strong>Dispositivo</strong> significa cualquier dispositivo que pueda acceder al
                                Servicio, como una computadora, un teléfono celular o una tableta digital.</li>
                            <li><strong>Datos Personales</strong> es cualquier información que se relacione con un
                                individuo identificado o identificable.</li>
                            <li><strong>Servicio</strong> se refiere a la Aplicación.</li>
                            <li><strong>Proveedor de Servicios</strong> significa cualquier persona física o jurídica
                                que procesa los datos en nombre de la Compañía. Se refiere a empresas de terceros o
                                individuos empleados por la Compañía para facilitar el Servicio, para proporcionar el
                                Servicio en nombre de la Compañía, para realizar servicios relacionados con el Servicio
                                o para ayudar a la Compañía a analizar cómo se utiliza el Servicio.</li>
                            <li><strong>Servicio de Redes Sociales de Terceros</strong> se refiere a cualquier sitio web
                                o cualquier sitio web de red social a través del cual un Usuario puede iniciar sesión o
                                crear una cuenta para usar el Servicio.</li>
                            <li><strong>Datos de Uso</strong> se refiere a los datos recopilados automáticamente, ya sea
                                generados por el uso del Servicio o de la propia infraestructura del Servicio (por
                                ejemplo, la duración de una visita a una página).</li>
                            <li><strong>Usted</strong> significa el individuo que accede o utiliza el Servicio, o la
                                compañía u otra entidad legal en nombre de la cual dicho individuo accede o utiliza el
                                Servicio, según corresponda.</li>
                        </ul>

                        <h3><strong>Recopilación y Uso de Sus Datos Personales</strong></h3>
                        <h4><strong>Tipos de Datos Recopilados</strong></h4>
                        <p><strong>Datos Personales</strong><br>Mientras utiliza Nuestro Servicio, podemos pedirle que
                            nos proporcione cierta información de identificación personal que pueda ser utilizada para
                            contactarlo o identificarlo. La información de identificación personal puede incluir, entre
                            otros:</p>
                        <ul>
                            <li>Dirección de correo electrónico</li>
                            <li>Nombre y apellido</li>
                            <li>Número de teléfono</li>
                            <li>Dirección, Estado, Provincia, Código Postal, Ciudad</li>
                            <li>Datos de Uso</li>
                        </ul>

                        <p><strong>Datos de Uso</strong><br>Los Datos de Uso se recopilan automáticamente cuando se
                            utiliza el Servicio.</p>
                        <p>Los Datos de Uso pueden incluir información como la dirección de Protocolo de Internet de Su
                            Dispositivo (por ejemplo, dirección IP), tipo de navegador, versión del navegador, las
                            páginas de nuestro Servicio que Usted visita, la hora y fecha de Su visita, el tiempo
                            dedicado a esas páginas, identificadores únicos de dispositivo y otros datos de diagnóstico.
                        </p>
                        <p>Cuando Usted accede al Servicio a través de un dispositivo móvil, podemos recopilar cierta
                            información automáticamente, incluyendo, entre otros, el tipo de dispositivo móvil que
                            utiliza, el ID único de su dispositivo móvil, la dirección IP de su dispositivo móvil, su
                            sistema operativo móvil, el tipo de navegador de Internet móvil que utiliza, identificadores
                            únicos de dispositivo y otros datos de diagnóstico.</p>
                        <p>También podemos recopilar información que Su navegador envía cada vez que visita nuestro
                            Servicio o cuando accede al Servicio a través de un dispositivo móvil.</p>

                        <h4><strong>Información de Servicios de Redes Sociales de Terceros</strong></h4>
                        <p>La Compañía le permite crear una cuenta e iniciar sesión para usar el Servicio a través de
                            los siguientes Servicios de Redes Sociales de Terceros:</p>
                        <ul>
                            <li>Google</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                        </ul>
                        <p>Si decide registrarse a través de un Servicio de Redes Sociales de Terceros o nos concede
                            acceso a él, podemos recopilar Datos Personales que ya están asociados con la cuenta de Su
                            Servicio de Redes Sociales de Terceros, como Su nombre, Su dirección de correo electrónico,
                            Sus actividades o Su lista de contactos asociada con esa cuenta.</p>
                        <p>También puede tener la opción de compartir información adicional con la Compañía a través de
                            la cuenta de Su Servicio de Redes Sociales de Terceros. Si elige proporcionar dicha
                            información y Datos Personales, durante el registro o de otra manera, Usted está dando
                            permiso a la Compañía para usarlos, compartirlos y almacenarlos de una manera consistente
                            con esta Política de Privacidad.</p>

                        <h4><strong>Uso de Sus Datos Personales</strong></h4>
                        <p>La Compañía puede usar los Datos Personales para los siguientes propósitos:</p>
                        <ul>
                            <li><strong>Para proporcionar y mantener nuestro Servicio</strong>, incluido el monitoreo
                                del uso de nuestro Servicio.</li>
                            <li><strong>Para gestionar Su Cuenta:</strong> para gestionar Su registro como usuario del
                                Servicio. Los Datos Personales que Usted proporciona pueden darle acceso a diferentes
                                funcionalidades del Servicio que están disponibles para Usted como usuario registrado.
                            </li>
                            <li><strong>Para la ejecución de un contrato:</strong> el desarrollo, cumplimiento y
                                ejecución del contrato de compra de los productos, artículos o servicios que Usted ha
                                comprado o de cualquier otro contrato con Nosotros a través del Servicio.</li>
                            <li><strong>Para contactarle:</strong> Para contactarle por correo electrónico, llamadas
                                telefónicas, SMS u otras formas equivalentes de comunicación electrónica, como
                                notificaciones push de una aplicación móvil sobre actualizaciones o comunicaciones
                                informativas relacionadas con las funcionalidades, productos o servicios contratados,
                                incluidas las actualizaciones de seguridad, cuando sea necesario o razonable para su
                                implementación.</li>
                            <li><strong>Para proporcionarle noticias, ofertas especiales e información general</strong>
                                sobre otros bienes, servicios y eventos que ofrecemos que son similares a los que ya ha
                                comprado o por los que ha consultado, a menos que haya optado por no recibir dicha
                                información.</li>
                            <li><strong>Para gestionar Sus solicitudes:</strong> Para atender y gestionar Sus
                                solicitudes hacia Nosotros.</li>
                            <li><strong>Para transferencias de negocios:</strong> Podemos usar Su información para
                                evaluar o llevar a cabo una fusión, desinversión, reestructuración, reorganización,
                                disolución u otra venta o transferencia de algunos o todos Nuestros activos, ya sea como
                                una empresa en funcionamiento o como parte de un procedimiento de quiebra, liquidación o
                                similar, en el que los Datos Personales que tenemos sobre los usuarios de nuestro
                                Servicio se encuentran entre los activos transferidos.</li>
                            <li><strong>Para otros propósitos:</strong> Podemos usar Su información para otros
                                propósitos, como análisis de datos, identificación de tendencias de uso, determinación
                                de la efectividad de nuestras campañas promocionales y para evaluar y mejorar nuestro
                                Servicio, productos, servicios, marketing y su experiencia.</li>
                        </ul>
                        <p>Podemos compartir Su información personal en las siguientes situaciones:</p>
                        <ul>
                            <li><strong>Con Proveedores de Servicios:</strong> Podemos compartir Su información personal
                                con Proveedores de Servicios para monitorear y analizar el uso de nuestro Servicio, para
                                contactarle.</li>
                            <li><strong>Para transferencias de negocios:</strong> Podemos compartir o transferir Su
                                información personal en conexión con, o durante las negociaciones de, cualquier fusión,
                                venta de activos de la Compañía, financiación o adquisición de la totalidad o una parte
                                de Nuestro negocio a otra compañía.</li>
                            <li><strong>Con Afiliados:</strong> Podemos compartir Su información con Nuestros afiliados,
                                en cuyo caso exigiremos a esos afiliados que respeten esta Política de Privacidad. Los
                                afiliados incluyen Nuestra empresa matriz y cualquier otra subsidiaria, socio de empresa
                                conjunta u otras compañías que controlemos o que estén bajo control común con Nosotros.
                            </li>
                            <li><strong>Con socios comerciales:</strong> Podemos compartir Su información con Nuestros
                                socios comerciales para ofrecerle ciertos productos, servicios o promociones.</li>
                            <li><strong>Con otros usuarios:</strong> cuando Usted comparte información personal o
                                interactúa de otra manera en las áreas públicas con otros usuarios, dicha información
                                puede ser vista por todos los usuarios y puede ser distribuida públicamente al exterior.
                                Si Usted interactúa con otros usuarios o se registra a través de un Servicio de Redes
                                Sociales de Terceros, Sus contactos en el Servicio de Redes Sociales de Terceros pueden
                                ver Su nombre, perfil, fotos y descripción de Su actividad. Del mismo modo, otros
                                usuarios podrán ver descripciones de Su actividad, comunicarse con Usted y ver Su
                                perfil.</li>
                            <li><strong>Con Su consentimiento:</strong> Podemos divulgar Su información personal para
                                cualquier otro propósito con Su consentimiento.</li>
                        </ul>

                        <h4><strong>Retención de Sus Datos Personales</strong></h4>
                        <p>La Compañía retendrá Sus Datos Personales solo durante el tiempo que sea necesario para los
                            fines establecidos en esta Política de Privacidad. Retendremos y utilizaremos Sus Datos
                            Personales en la medida necesaria para cumplir con nuestras obligaciones legales (por
                            ejemplo, si se nos requiere retener sus datos para cumplir con las leyes aplicables),
                            resolver disputas y hacer cumplir nuestros acuerdos y políticas legales.</p>
                        <p>La Compañía también retendrá los Datos de Uso para fines de análisis interno. Los Datos de
                            Uso generalmente se retienen por un período de tiempo más corto, excepto cuando estos datos
                            se utilizan para fortalecer la seguridad o para mejorar la funcionalidad de Nuestro
                            Servicio, o si estamos legalmente obligados a retener estos datos por períodos de tiempo más
                            largos.</p>

                        <h4><strong>Transferencia de Sus Datos Personales</strong></h4>
                        <p>Su información, incluidos los Datos Personales, se procesa en las oficinas operativas de la
                            Compañía y en cualquier otro lugar donde se encuentren las partes involucradas en el
                            procesamiento. Significa que esta información puede ser transferida y mantenida en
                            computadoras ubicadas fuera de Su estado, provincia, país u otra jurisdicción gubernamental
                            donde las leyes de protección de datos pueden diferir de las de Su jurisdicción.</p>
                        <p>Su consentimiento a esta Política de Privacidad, seguido del envío de dicha información,
                            representa Su acuerdo con esa transferencia.</p>
                        <p>La Compañía tomará todas las medidas razonablemente necesarias para garantizar que Sus datos
                            se traten de forma segura y de acuerdo con esta Política de Privacidad, y no se realizará
                            ninguna transferencia de Sus Datos Personales a una organización o país a menos que existan
                            controles adecuados, incluida la seguridad de Sus datos y otra información personal.</p>

                        <h4><strong>Eliminar Sus Datos Personales</strong></h4>
                        <p>Usted tiene derecho a eliminar o solicitar que ayudemos a eliminar los Datos Personales que
                            hemos recopilado sobre Usted.</p>
                        <p>Nuestro Servicio puede darle la capacidad de eliminar cierta información sobre Usted desde
                            dentro del Servicio.</p>
                        <p>Usted puede actualizar, modificar o eliminar Su información en cualquier momento iniciando
                            sesión en Su Cuenta, si tiene una, y visitando la sección de configuración de la cuenta que
                            le permite gestionar Su información personal. También puede contactarnos para solicitar
                            acceso, corregir o eliminar cualquier información personal que nos haya proporcionado.</p>
                        <p>Tenga en cuenta, sin embargo, que es posible que necesitemos retener cierta información
                            cuando tengamos una obligación legal o una base legal para hacerlo.</p>

                        <h3><strong>Divulgación de Sus Datos Personales</strong></h3>
                        <h4><strong>Transacciones Comerciales</strong></h4>
                        <p>Si la Compañía está involucrada en una fusión, adquisición o venta de activos, Sus Datos
                            Personales pueden ser transferidos. Le notificaremos antes de que Sus Datos Personales sean
                            transferidos y queden sujetos a una Política de Privacidad diferente.</p>

                        <h4><strong>Cumplimiento de la ley</strong></h4>
                        <p>Bajo ciertas circunstancias, la Compañía puede estar obligada a divulgar Sus Datos Personales
                            si así lo exige la ley o en respuesta a solicitudes válidas de autoridades públicas (por
                            ejemplo, un tribunal o una agencia gubernamental).</p>

                        <h4><strong>Otros requisitos legales</strong></h4>
                        <p>La Compañía puede divulgar Sus Datos Personales de buena fe creyendo que dicha acción es
                            necesaria para:</p>
                        <ul>
                            <li>Cumplir con una obligación legal.</li>
                            <li>Proteger y defender los derechos o la propiedad de la Compañía.</li>
                            <li>Prevenir o investigar posibles irregularidades en conexión con el Servicio.</li>
                            <li>Proteger la seguridad personal de los Usuarios del Servicio o del público.</li>
                            <li>Protegerse contra la responsabilidad legal.</li>
                        </ul>

                        <h3><strong>Seguridad de Sus Datos Personales</strong></h3>
                        <p>La seguridad de Sus Datos Personales es importante para Nosotros, pero recuerde que ningún
                            método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Si
                            bien nos esforzamos por utilizar medios comercialmente aceptables para proteger Sus Datos
                            Personales, no podemos garantizar su seguridad absoluta.</p>

                        <h3><strong>Privacidad de los Menores</strong></h3>
                        <p>Nuestro Servicio no se dirige a nadie menor de 13 años. No recopilamos a sabiendas
                            información de identificación personal de nadie menor de 13 años. Si Usted es padre o tutor
                            y sabe que su hijo nos ha proporcionado Datos Personales, contáctenos. Si nos damos cuenta
                            de que hemos recopilado Datos Personales de cualquier persona menor de 13 años sin
                            verificación del consentimiento de los padres, tomamos medidas para eliminar esa información
                            de Nuestros servidores.</p>
                        <p>Si necesitamos basarnos en el consentimiento como base legal para procesar Su información y
                            Su país requiere el consentimiento de un padre, podemos requerir el consentimiento de Su
                            padre antes de recopilar y usar esa información.</p>

                        <h3><strong>Enlaces a Otros Sitios Web</strong></h3>
                        <p>Nuestro Servicio puede contener enlaces a otros sitios web que no son operados por Nosotros.
                            Si hace clic en un enlace de un tercero, será dirigido al sitio de ese tercero. Le
                            recomendamos encarecidamente que revise la Política de Privacidad de cada sitio que visite.
                        </p>
                        <p>No tenemos control ni asumimos ninguna responsabilidad por el contenido, las políticas de
                            privacidad o las prácticas de los sitios o servicios de terceros.</p>

                        <h3><strong>Cambios a esta Política de Privacidad</strong></h3>
                        <p>Podemos actualizar Nuestra Política de Privacidad de vez en cuando. Le notificaremos
                            cualquier cambio publicando la nueva Política de Privacidad en esta página.</p>
                        <p>Le informaremos por correo electrónico y/o mediante un aviso destacado en Nuestro Servicio,
                            antes de que el cambio entre en vigor y actualizaremos la fecha de "Última actualización" en
                            la parte superior de esta Política de Privacidad.</p>
                        <p>Se le recomienda revisar esta Política de Privacidad periódicamente para detectar cualquier
                            cambio. Los cambios a esta Política de Privacidad son efectivos cuando se publican en esta
                            página.</p>

                        <h3><strong>Contáctenos</strong></h3>
                        <p>Si tiene alguna pregunta sobre esta Política de Privacidad, puede contactarnos:</p>
                        <ul>
                            <li>Visitando esta página en nuestro sitio web: <a
                                    href="http://www.gyler.cl/privacy_policies">www.gyler.cl/privacy_policies</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>