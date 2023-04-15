//hell
interface AutoResizingTextAreaProps {
  value: string;
  className: string;
  placeholder: string;
}

const AutoResizingTextArea: React.FC<AutoResizingTextAreaProps> = ({ value, className, placeholder }) => {
  const text_area_ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (text_area_ref.current) {
      text_area_ref.current.style.height = 'auto';
      text_area_ref.current.style.height = text_area_ref.current.scrollHeight + 'px';
    }
  }, [value]);

  return (
    <textarea
      ref={text_area_ref}
      value={value}
      disabled
      placeholder={placeholder}
      className={`${className} overflow-hidden`}
      onChange={() => { }}
    />
  );
};
function Calculator() {
  //retrieves value from above and matches with hash table
  const text = 'Lorem vipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti dolorem quas nihil illum mollitia consequuntur, repudiandae animi repellendus, eos sunt ad omnis id aliquid odio unde voluptatibus. Exercitationem, sequi?';

  return (
    <AutoResizingTextArea
      value={text}
      placeholder="Output will be here..."
      className="max-w-lg pb-3 ml-12 mr-auto h-auto bg-white border-4 border-black/90 rounded-lg"
    />
  );
}
