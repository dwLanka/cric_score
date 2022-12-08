import { useDynamicSvgImport } from "@/Common/Hooks/useDynamicSvgImport";

interface IProps {
  name: string;
  wrapperStyle?: string;
  options?: React.SVGProps<SVGSVGElement>;
}

function Icon(props: IProps) {
  const { name, wrapperStyle, options } = props;
  const { loading, SvgIcon: SVGIcon } = useDynamicSvgImport(name);

  return (
    <>
      {loading && (
        <div className="rounded-full bg-slate-400 animate-pulse h-8 w-8"></div>
      )}

      {SVGIcon && wrapperStyle ? (
        <div className={`svg__icon ${wrapperStyle}`}>
          <SVGIcon {...options} />
        </div>
      ) : (
        SVGIcon && <SVGIcon {...options} />
      )}
    </>
  );
}

export default Icon;
