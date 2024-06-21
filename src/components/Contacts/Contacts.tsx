import "@/styles/components/Contacts.scss";
import { Field, Form, Formik } from "formik";

export default function Contacts() {
  return (
    <>
      <main>
        <section className="order-container">
          <div className="form-header">
            <h2>Напишите нам!</h2>
            <p>
              Здесь вы можете задать любой вопрос или оформить картину на заказ{" "}
            </p>
          </div>

          <Formik
            initialValues={{ name: "", phone: "", email: "", comment: "" }}
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
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Почта"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div>
                      <Field
                        type="textarea"
                        name="topic"
                        className="form-control"
                        placeholder="Тема"
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
          </Formik>
        </section>
      </main>
    </>
  );
}
