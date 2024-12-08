import FormContainer from "@/components/form/FormContainner";
import FormInput from "@/components/form/FormInput";
import SubmitButton from "@/components/form/Buttons";
import { Sub } from "@radix-ui/react-dropdown-menu";
const createProfileAction = async (prevState: any, formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;
  return { message: "Profile Created" };
};

function CreateProfilePage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded-md max-w-lg">
        <FormContainer action={createProfileAction}>
          <div className="grid gap-4 mt-4">
            <FormInput type="text" name="firstName" label="First Name" />
            <FormInput type="text" name="lastName" label="Last Name" />
            <FormInput type="text" name="username" label="Username" />
          </div>
        </FormContainer>
      </div>
      <SubmitButton text="Create Profile" className="mt-8" />
    </section>
  );
}

export default CreateProfilePage;
