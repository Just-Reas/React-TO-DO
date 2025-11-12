import { useState} from "react";

export const useSearch = (tasks) => {
    const [searchQuery, setSearchQuery] = useState('')

  const clearSearchQuery = searchQuery.trim().toLowerCase();
  const filteredTasks =
    clearSearchQuery.length > 0
      ? tasks.filter(({ title }) =>
          title.toLowerCase().includes(clearSearchQuery)
        )
      : null;

      return{filteredTasks,searchQuery,setSearchQuery}
};
