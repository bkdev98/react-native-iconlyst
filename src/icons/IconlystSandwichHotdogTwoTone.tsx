import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSandwichHotdogTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.104 8.711 9.21 19.607a3.054 3.054 0 1 1-4.319-4.318L15.785 4.393a3.054 3.054 0 0 1 4.32 4.318"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.609 15.623a4.203 4.203 0 0 1 .123-5.817l5.572-5.572a4.2 4.2 0 0 1 5.817-.123M8.876 19.891a4.203 4.203 0 0 0 5.817-.123l5.573-5.572a4.2 4.2 0 0 0 .122-5.817M9.037 15.381c.519-.09 1.03-.14 1.63-.742 1.133-1.133.325-1.942 1.457-3.075 1.133-1.132 1.942-.323 3.067-1.447.566-.567.647-1.052.728-1.538"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSandwichHotdogTwoTone;
