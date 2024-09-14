import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchMenu3Outline = ({
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
      d="M13.015 4.653a6.8 6.8 0 0 0-3.597 1.024.75.75 0 0 1-.793-1.274 8.323 8.323 0 0 1 12.713 7.073c0 2.129-.799 4.07-2.113 5.542l2.555 2.548a.75.75 0 0 1-1.06 1.062l-2.59-2.584a8.3 8.3 0 0 1-5.115 1.756 8.3 8.3 0 0 1-4.237-1.158.75.75 0 1 1 .764-1.29 6.8 6.8 0 0 0 3.473.948 6.8 6.8 0 0 0 4.607-1.79l.015-.016a6.804 6.804 0 0 0 2.2-5.017 6.823 6.823 0 0 0-6.822-6.824M2.5 8.18a.75.75 0 0 1 .75-.75h3.368a.75.75 0 1 1 0 1.5H3.25a.75.75 0 0 1-.75-.75m0 3.745a.75.75 0 0 1 .75-.75h6.263a.75.75 0 1 1 0 1.5H3.25a.75.75 0 0 1-.75-.75m0 3.77a.75.75 0 0 1 .75-.75h2.638a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchMenu3Outline;
