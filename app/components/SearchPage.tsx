import { Form, useActionData, useNavigation } from '@remix-run/react';

export default function SearchPage() {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className="rounded-lg border p-3">
      <h1 className="text-xl font-semibold mb-5">Please enter your location</h1>

      <div>
        <Form method="POST">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative mb-5">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="location"
              name="location"
              className="block p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search location..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-teal-500 px-4 py-2 rounded-lg text-white"
          >
            {isSubmitting ? 'Loading...' : 'Submit'}
          </button>

          <div className="mt-5 flex flex-col gap-y-3"></div>
        </Form>
      </div>
    </div>
  );
}
