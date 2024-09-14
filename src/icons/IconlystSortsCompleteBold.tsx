import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSortsCompleteBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m7.171 15.899-1.717 1.718-.748-.748a.999.999 0 1 0-1.414 1.414l1.455 1.455a1.003 1.003 0 0 0 1.414 0l2.424-2.425a.999.999 0 1 0-1.414-1.414M7.171 10.082 5.454 11.8l-.748-.747a.999.999 0 1 0-1.414 1.414l1.455 1.454a.997.997 0 0 0 1.414 0l2.424-2.424a.999.999 0 1 0-1.414-1.414M7.171 4.262 5.454 5.979l-.748-.748a.999.999 0 1 0-1.414 1.414L4.747 8.1a.997.997 0 0 0 1.414 0l2.424-2.424a.999.999 0 1 0-1.414-1.414M20 17.059h-8.727a1 1 0 1 0 0 2H20a1 1 0 1 0 0-2M20 11.243h-8.727a1 1 0 1 0 0 2H20a1 1 0 1 0 0-2M11.273 7.422H20a1 1 0 1 0 0-2h-8.728a1 1 0 1 0 0 2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSortsCompleteBold;
