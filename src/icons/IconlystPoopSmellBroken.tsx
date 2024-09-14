import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoopSmellBroken = ({
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
      d="M13.516 12.342c1.488-.968 1.845-2.179 1.916-2.804.222-1.985-1.231-3.3-2.794-4.059-.43-.21-.94-.471-1.412-.551.019.074.846 1.442-1.46 3.362-.66.552-1.137 1.467-1.047 2.332.068.64.434 1.243.942 1.678"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.333 10.043c1.686.132 3.01 1.606 3.01 3.41 0 .152-.019.303-.036.454C19.838 14.19 21 15.579 21 17.27c0 1.89-1.44 3.043-2.981 3.43-1.011.248-4.295.414-7.464.328M8.721 10.033c-1.711.104-3.081 1.597-3.081 3.42 0 .133.018.256.036.388 0 .019.01.047.01.066C4.162 14.2 3 15.589 3 17.27c0 1.89 1.478 3.062 3.27 3.43"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.68 13.838c.32 2.702 4.035 3.788 6.868 3.08M17.001 15.914c.473-.333 1.183-1.003 1.31-2.076M19.54 6.043a1.9 1.9 0 0 0-.045 1.816c.278.541.279 1.185.002 1.729M5.723 2.95a1.9 1.9 0 0 0-.045 1.814 1.9 1.9 0 0 1 .002 1.73"
    />
  </Svg>
);
export default IconlystPoopSmellBroken;
