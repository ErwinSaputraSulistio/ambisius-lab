export default function Button({ click, disabled, name, styles }) {
  return(
    <button 
      className={ 
        `duration-200 hover:opacity-50 p-2 transition rounded-md 
        ${ styles ? styles : 'bg-slate-800 text-white w-32' } ${
        disabled && 'opacity-50'}` 
      }
      disabled={ disabled }
      onClick={ click ? () => { click() } : null }
    >
      { name }
    </button>
  )
}