import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRainDropBulk = ({
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
      d="M12.5 20.5c-6.148 0-8.922-6.833-6.266-10.988C8.708 5.956 12.5 3.5 12.5 3.5s3.792 2.456 6.266 6.012C21.422 13.667 18.648 20.5 12.5 20.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.76 13.98a.797.797 0 1 0-1.48.59c.533 1.34 1.735 2.482 3.456 2.679a.797.797 0 0 0 .18-1.584c-1.057-.12-1.808-.81-2.156-1.685"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRainDropBulk;
