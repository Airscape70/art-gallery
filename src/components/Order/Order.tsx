import "@/styles/components/Order.scss";
import { Field, Form, Formik } from "formik";

export default function Order() {
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
                        name="comment"
                        className="form-control"
                        placeholder="Тема"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div>
                      <Field
                        as="textarea"
                        type="textarea"
                        name="comment"
                        className="form-control"
                        placeholder="Сообщение"
                      />
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </section>
      </main>
    </>
  );
}
