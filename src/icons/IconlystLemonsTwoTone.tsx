import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLemonsTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.093 12.421c.462-1.604.432-3.321-.151-4.907-.501-1.133.837-2.173-.372-3.382-1.209-1.208-2.248.13-3.382-.371-2.945-1.083-6.345-.26-8.628 2.088-2.356 2.29-3.177 5.702-2.08 8.653.502 1.093-.684 2.127.455 3.266 1.138 1.139 2.173-.048 3.266.455a7.76 7.76 0 0 0 3.378.45"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.664 14.474c-.827-1.788-2.702-2.932-4.758-2.903-2.062-.03-3.94 1.12-4.764 2.917-.262.709-1.248.641-1.248 1.652s.986.944 1.248 1.652c.823 1.797 2.702 2.947 4.764 2.917 2.056.03 3.93-1.114 4.758-2.902.28-.726 1.336-.593 1.336-1.667 0-1.073-1.055-.94-1.336-1.666"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.578 6.643.01.01M14.517 8.62l.01.01M11.607 9.16l.01.01"
    />
  </Svg>
);
export default IconlystLemonsTwoTone;
