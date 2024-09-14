import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchGraphDownOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.132 3.87a7.668 7.668 0 1 0 0 15.335 7.668 7.668 0 0 0 0-15.336m-9.168 7.667a9.168 9.168 0 1 1 9.168 9.168 9.167 9.167 0 0 1-9.168-9.168"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.054 11.688c.4.108.637.52.53.92l-.588 2.177a.75.75 0 0 1-.92.529l-2.176-.588a.75.75 0 0 1 .391-1.448l1.452.392.392-1.453a.75.75 0 0 1 .92-.529"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.628 8.364a.75.75 0 0 1 1.024.276l1.078 1.873 1.653-.951a.75.75 0 0 1 1.024.276l2.517 4.376a.75.75 0 0 1-1.3.748l-2.144-3.726-1.652.95a.75.75 0 0 1-1.024-.275L8.352 9.388a.75.75 0 0 1 .276-1.024M17.33 17.172a.75.75 0 0 1 1.061-.002l3.425 3.416a.75.75 0 0 1-1.06 1.062l-3.424-3.416a.75.75 0 0 1-.002-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchGraphDownOutline;
