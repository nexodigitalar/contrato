/* Styles & Img */
import "./Step1_3.scss";
import cuotaLibre from "@/assets/img/cuota-libre.png";

/* React Router */
import { useNavigate } from "react-router-dom";

/* Components */
import Header from "@/components/Header/Header";
import Switch from "@/components/Switch/Switch";
import Button from "@/components/Button/Button";
import CuotaMinMax from "./components/CuotaMinMax";

const Step1_3 = () => {
  const navigate = useNavigate();

  return (
    <div className="step1_3">
      <div className="step1_3_container">
        <Header text="USTED" bold="SELECCIONÓ" logo={cuotaLibre} />

        <section className="step1_3_innerContainer">
          <p className="step1_3_watermark">1</p>

          <section className="step1_3_infoContainer">
            <div className="step1_3_nav">
              <h3 className="step1_3_title">
                <span className="green">Sorteo </span>y{" "}
                <span className="gray">licitación</span>
              </h3>
              <div className="step1_3_switchContainer">
                <p className="step1_3_text">Entendido</p>
                <Switch />
              </div>
            </div>

            <div>
              <p className="step1_3_text">
                Todos los meses participas de{" "}
                <span className="green">
                  un sorteo y una o varias licitaciones
                </span>{" "}
                en tu grupo. Podes ser ganador{" "}
                <span className="green">desde el primer mes </span>y cumplir tu
                sueño o proyecto con el costo más bajo del mercado.
              </p>
              <p className="step1_3_text">
                La licitación consiste en adelantar cuotas. Si sos quien ofrece
                la mayor cantidad de cuotas, sos el ganador. Las cuotas que
                ofreces se descuentan del capital que vas a recibir, no
                necesitas dinero extra para participar. De esta forma aceleras
                tu acceso al capital, acortando el plazo{" "}
                <span className="green">sin aumentar tu cuota</span>.
              </p>
              <p className="step1_3_text">
                Mira las oportunidades de licitación que tenes en la sección “mi
                grupo” de consorcio.uy. Los sorteos y las licitaciones aceleran
                el ritmo de adjudicación de los grupos, para mejorar, aún más,
                tus chances.
              </p>
            </div>
          </section>
        </section>

        <section className="step1_3_innerContainer">
          <p className="step1_3_watermark">2</p>

          <section className="step1_3_infoContainer">
            <div className="step1_3_nav">
              <h3 className="step1_3_title">
                Tu contrato en modalidad <span className="green">cuota </span>
                <span className="gray">libre</span>
              </h3>
              <div className="step1_3_switchContainer">
                <p className="step1_3_text">Entendido</p>
                <Switch />
              </div>
            </div>

            <div>
              <p className="step1_3_text">
                Hasta que resultes ganador, tu contrato tiene el beneficio de
                cuota libre
              </p>
              <p className="step1_3_text">
                Te permite pagar lo que quieras entre una cuota{" "}
                <span className="green">mínima </span>y una{" "}
                <span className="green">máxima</span> de modo de ir generando tu{" "}
                <span className="green">capital promedio</span>, lo cual te
                permite aumentarlo o disminuirlo según tus necesidades. Te
                ayuda, porque si un mes te complica el pago, pagas el mínimo y
                estás participando en el sorteo y licitaciones.
              </p>
              <p className="step1_3_text">
                Al pagar por defecto te ofrecerá hacerlo por la cuota promedio,
                pero vos podes pagar lo quieras entre máximo y mínimo. Cuando
                ganas el sorteo o la licitación, el capital que vas a recibir
                será tu <span className="green">capital promedio </span>y tu
                cuota también será la promedio. Al confeccionar éste contrato,
                te estamos informando por defecto la cuota promedio del capital
                que elegiste, pero siempre podrás consultar el máximo y el
                mínimo aplicable, tanto en las condiciones particulares que
                suscribes, como en tu cuenta online, el link de pago o las redes
                de cobranza.
              </p>
            </div>
          </section>
        </section>

        <section className="step1_3_innerContainer">
          <p className="step1_3_watermark">3</p>

          <section className="step1_3_infoContainer">
            <div className="step1_3_nav">
              <h3 className="step1_3_title">
                Tu cuota <span className="green">mínima, máxima </span>
                <span className="gray">y promedio</span>
              </h3>
              <div className="step1_3_switchContainer">
                <p className="step1_3_text">Entendido</p>
                <Switch />
              </div>
            </div>

            <CuotaMinMax />
          </section>
        </section>

        <section className="step1_3_innerContainer">
          <p className="step1_3_watermark">4</p>

          <section className="step1_3_infoContainer">
            <div className="step1_3_nav">
              <h3 className="step1_3_title">
                <span className="green">Ajuste </span>por{" "}
                <span className="gray">IPC</span>
              </h3>
              <div className="step1_3_switchContainer">
                <p className="step1_3_text">Entendido</p>
                <Switch />
              </div>
            </div>

            <div>
              <p className="step1_3_text">
                Tu <span className="green">capital </span>y tu{" "}
                <span className="green">cuota</span>, se ajusta por IPC mes a
                mes durante toda la vigencia del contrato. Durante tu período de
                ahorro esto te permite mantener el poder de compra y
                capitalizarte. Así, la cuota se ajustará a lo largo de todo el
                período de pago y el capital hasta el mes en que resulte
                favorecido.
              </p>
            </div>
          </section>
        </section>

        <section className="step1_3_innerContainer">
          <p className="step1_3_watermark">5</p>

          <section className="step1_3_infoContainer">
            <div className="step1_3_nav">
              <h3 className="step1_3_title">
                Al momento de <span className="green">retirar </span> tu{" "}
                <span className="gray">capital</span>
              </h3>
              <div className="step1_3_switchContainer">
                <p className="step1_3_text">Entendido</p>
                <Switch />
              </div>
            </div>

            <div>
              <p className="step1_3_text">
                Cuando ganes un sorteo o una licitación vas a retirar tu dinero.
                De nuestra parte, tenemos que ayudarte a acreditar que por la
                parte que no ahorraste y que el grupo te presta, vas a pagar las
                cuotas que te faltan para que los demás también ganen. Para ello
                te vamos a pedir <span className="green">ingresos </span>y{" "}
                <span className="green">garantías </span>acordes al monto que te
                resta por pagar.
              </p>
            </div>
          </section>
        </section>

        <section className="step1_3_innerContainer">
          <p className="step1_3_watermark">6</p>

          <section className="step1_3_infoContainer">
            <div className="step1_3_nav">
              <h3 className="step1_3_title">
                Dificultades en los pagos en el{" "}
                <span className="gray">período</span> de{" "}
                <span className="green">ahorro </span>
              </h3>
              <div className="step1_3_switchContainer">
                <p className="step1_3_text">Entendido</p>
                <Switch />
              </div>
            </div>

            <div>
              <p className="step1_3_text">
                Estás ahorrando para tu capital a un costo incomparable, esto
                tiene que ser seguro y placentero. Entonces, tu primera ventaja
                ante cualquier dificultad es tu modalidad cuota libre. Así,{" "}
                <span className="green">bajas tu cuota </span>al mínimo
                establecido en tu contrato en cualquier momento. A esto, sumale
                la posibilidad de pedir{" "}
                <span className="green">licencias </span>en tus pagos con
                simples pasos al entrar en tu cuenta online. Estás tranquilo
                desde el principio.
              </p>
              <p className="step1_3_text">
                Si necesitas dejar tu contrato, tu ahorro hasta ese momento
                tiene un valor y lo puedes ceder a valor mercado, ofreciéndolo
                al público. Finalmente, en el caso que ninguna solución te
                resulte conveniente, tu contrato puede verse rescindido y te
                corresponde una multa por incumplir con el grupo. Lo aportado,
                deducida la multa, lo recuperas dentro de los 90 días en que tu
                número de contrato resulte ganador en el grupo por cualquier
                modalidad.
              </p>
              <p className="step1_3_text">
                Tu contrato rescindido siempre es recuperable, superado tu
                inconveniente aun pasado el tiempo, te puedes{" "}
                <span className="green">reenganchar</span>. CONSORCIO te espera.
              </p>
              <p className="step1_3_text">
                Además, CONSORCIO te ofrece atención personalizada y soluciones
                a medida, a través de su servicio al cliente llamando al 2915
                2295.
              </p>
            </div>
          </section>
        </section>

        <div className="step1_3_buttonContainer">
          <Button text="Ver preguntas frecuentes" type="secondary" />
          <Button
            text="Siguiente"
            click={() => navigate("/datos-personales")}
          />
        </div>
        <p className="step1_3_subtext">
          * Debe aceptar todas las informaciones correspondientes para poder
          confirmar el contrato
        </p>
      </div>
    </div>
  );
};

export default Step1_3;
