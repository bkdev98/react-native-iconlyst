import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLensShutterBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.87 9.366a.3.3 0 0 0-.26-.15h-3.22a.3.3 0 0 0-.259.15L8.523 12.15a.3.3 0 0 0 0 .3l1.61 2.787a.3.3 0 0 0 .26.15h3.217a.3.3 0 0 0 .26-.15l1.609-2.785a.3.3 0 0 0 0-.3zM7.311 10.352a.3.3 0 0 0 .52-.001l4.099-7.1a.3.3 0 0 0-.26-.45H7.782c-1.545 0-2.835.54-3.757 1.472a.29.29 0 0 0-.04.348c.456.784 2.224 3.826 3.326 5.73M16.035 9.216a.3.3 0 0 0-.26.45l4.939 8.554c.124.215.436.193.508-.045.178-.58.278-1.214.278-1.901V9.516a.3.3 0 0 0-.3-.3zM13.758 3.086l-2.414 4.18a.3.3 0 0 0 .26.45h9.52a.29.29 0 0 0 .29-.325c-.368-2.775-2.35-4.59-5.197-4.59h-2.099c-.151 0-.273.117-.342.252zM7.968 15.387a.3.3 0 0 0 .26-.45L3.286 6.381c-.124-.215-.435-.192-.508.045A6.5 6.5 0 0 0 2.5 8.327v6.76a.3.3 0 0 0 .3.3zM20.075 20.113l-3.384-5.861a.3.3 0 0 0-.52 0l-4.1 7.099a.3.3 0 0 0 .26.45h3.885c1.605 0 2.934-.581 3.862-1.58.03-.031.019-.07-.003-.108M10.244 21.517l2.413-4.18a.3.3 0 0 0-.26-.45h-9.52a.29.29 0 0 0-.291.326c.369 2.774 2.351 4.589 5.196 4.589h2.102c.151 0 .274-.118.343-.253z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLensShutterBold;
