import "@/styles/components/Modal.scss";
import { Field, Form, Formik } from "formik";

export default function Modal(active: boolean) {

  
  return (
    <div className={active === true ? "modal" + "modal-active" : "modal"}>
      <div className="modal-content">
        <button className="modal-close-btn">Х</button>
        <p>Имя</p>
        <p>Телефон</p>
        <p>Комментарий к заказу (или ваш вопрос)</p>
        <button className="modal-submit-btn">Отправить</button>
      </div>
    </div>
  );
}

{
  /* <Formik
          initialValues={{ name: "", phone: "", comment: "" }}
          onSubmit={() => {}}
        >
          {() => (
            <Form>
              <div className="form-container">
                <div className="field">
                  <div>
                    <Field
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="ФИО"
                    />
                  </div>
                </div>

                <div className="field">
                  <div>
                    <Field
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Телефон"
                    />
                  </div>
                </div>

                <div className="field">
                  <div>
                    <Field
                      as="textarea"
                      rows="10"
                      cols="94"
                      type="textarea"
                      name="comment"
                      className="form-control area"
                      placeholder="Сообщение"
                    />
                  </div>
                </div>
              </div>

              <span className="submit-btn">Отправить</span>
            </Form>
          )}
        </Formik> */
}
