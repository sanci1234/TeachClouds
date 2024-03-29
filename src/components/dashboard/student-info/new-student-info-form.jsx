"use client";
import { createStudentInfoAction } from "@/actions/student-info-actions";
import CancelButton from "@/components/common/form-fields/cancel-button";
import SubmitButton from "@/components/common/form-fields/submit-button";
import { config } from "@/helpers/config";
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import { getTermTitle } from "@/helpers/misc";
import { useFormState } from "react-dom";

const NewStudentInfoForm = ({ students, lessons, terms }) => {
  const [state, dispatch] = useFormState(
    createStudentInfoAction,
    initialResponse
  );
  return (
    <div className="container ">
      <div className="card">
        <div className="card-body">
          <div className="card-title">New</div>
          {state?.message ? (
            <div className="alert alert-danger">{state.message}</div>
          ) : null}
          <form action={dispatch} noValidate>
            <div className="row">
              <div className="col-md-6 col-xl-4">
                <div className="form-floating mb-3">
                  <select
                    className={`form-select ${isInvalid(
                      state.errors?.lessonId
                    )}`}
                    id="lessonId"
                    name="lessonId"
                  >
                    <option value="">Select</option>
                    {lessons.map((item) => (
                      <option value={item.lessonId} key={item.lessonId}>
                        {item.lessonName}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="lessonId">Lesson</label>
                  <div className="invalid-feedback">
                    {state.errors?.lessonId}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="form-floating mb-3">
                  <select
                    className={`form-select ${isInvalid(
                      state.errors?.studentId
                    )}`}
                    id="studentId"
                    name="studentId"
                  >
                    {Array.isArray(students) &&
                      students.map((item) => (
                        <option value={item.userId} key={item.userId}>
                          {item.name} {item.surname}
                        </option>
                      ))}
                  </select>
                  <label htmlFor="studentId">Student</label>
                  <div className="invalid-feedback">
                    {state.errors?.studentId}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="form-floating mb-3">
                  <select
                    className={`form-select ${isInvalid(
                      state.errors?.educationTermId
                    )}`}
                    id="educationTermId"
                    name="educationTermId"
                  >
                    <option value="">Select</option>
                    {terms.map((item) => (
                      <option value={item.id} key={item.id}>
                        {getTermTitle(item)}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="educationTermId">Term</label>
                  <div className="invalid-feedback">
                    {state.errors?.educationTermId}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className={`form-control ${isInvalid(
                      state.errors?.absentee
                    )}`}
                    id="absentee"
                    name="absentee"
                    placeholder="Absentee"
                  />
                  <label htmlFor="absentee">Absentee</label>
                  <div className="invalid-feedback">
                    {state.errors?.absentee}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className={`form-control ${isInvalid(
                      state.errors?.midtermExam
                    )}`}
                    id="midtermExam"
                    name="midtermExam"
                    placeholder="Midterm Exam"
                  />
                  <label htmlFor="midtermExam">Midterm Exam</label>
                  <div className="invalid-feedback">
                    {state.errors?.midtermExam}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className={`form-control ${isInvalid(
                      state.errors?.finalExam
                    )}`}
                    id="finalExam"
                    name="finalExam"
                    placeholder="Final Exam"
                  />
                  <label htmlFor="finalExam">Final Exam</label>
                  <div className="invalid-feedback">
                    {state.errors?.finalExam}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className={`form-control ${isInvalid(
                      state.errors?.infoNote
                    )}`}
                    id="infoNote"
                    name="infoNote"
                    placeholder="Info Note"
                  />
                  <label htmlFor="infoNote">Info Note</label>
                  <div className="invalid-feedback">
                    {state.errors?.infoNote}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-3">
              <CancelButton />
              <SubmitButton title="Create" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NewStudentInfoForm;
