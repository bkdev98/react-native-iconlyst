import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSimcardBulk = ({
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
      d="m19.106 7.234-3.794-3.951a2.58 2.58 0 0 0-1.837-.783h-5.07a4.224 4.224 0 0 0-4.22 4.22v10.561A4.223 4.223 0 0 0 8.405 21.5h7.192a4.224 4.224 0 0 0 4.218-4.219V9c0-.663-.252-1.291-.709-1.766"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.809 17.92c1.413 0 2.4-1.02 2.4-2.48v-2.07c0-1.46-.987-2.48-2.4-2.48h-3.61c-1.412 0-2.4 1.02-2.4 2.48v2.07c0 1.46.988 2.48 2.4 2.48zM10.2 12.39h3.608c.783 0 .9.613.9.98v2.07c0 .365-.117.98-.9.98H10.2c-.785 0-.902-.615-.902-.98v-2.07c0-.367.117-.98.902-.98"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSimcardBulk;
