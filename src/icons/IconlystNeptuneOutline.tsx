import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNeptuneOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.864 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75-9.75-4.365-9.75-9.75m9.75-8.25a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.226 8.055a.75.75 0 0 1 .217 1.038A13.72 13.72 0 0 1 9.945 15.32c-2.372 0-4.606-.602-6.554-1.663a.75.75 0 0 1 .717-1.317 12.2 12.2 0 0 0 5.837 1.48c4.286 0 8.058-2.205 10.243-5.546a.75.75 0 0 1 1.038-.218"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.071 12.378a.75.75 0 0 1 .081 1.058 15.46 15.46 0 0 1-11.767 5.415c-1.855 0-3.636-.327-5.286-.926a.75.75 0 1 1 .512-1.41c1.488.54 3.096.836 4.774.836a13.96 13.96 0 0 0 10.629-4.891.75.75 0 0 1 1.057-.082M18.768 4.534a.75.75 0 0 1 .238 1.034 10.67 10.67 0 0 1-9.061 5.024c-2.129 0-4.114-.623-5.78-1.697a.75.75 0 1 1 .813-1.261 9.13 9.13 0 0 0 4.967 1.458 9.17 9.17 0 0 0 7.789-4.32.75.75 0 0 1 1.034-.238"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.86 2.79a.75.75 0 0 1 .183 1.045 8.27 8.27 0 0 1-6.785 3.532 8.25 8.25 0 0 1-3.513-.78.75.75 0 0 1 .637-1.358c.872.409 1.846.638 2.876.638a6.77 6.77 0 0 0 5.557-2.893.75.75 0 0 1 1.045-.184"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNeptuneOutline;
