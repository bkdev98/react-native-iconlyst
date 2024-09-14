import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSandwichHotdogBroken = ({
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
      d="M19.604 8.711 8.71 19.607a3.054 3.054 0 1 1-4.319-4.318L15.285 4.393a3.054 3.054 0 0 1 4.32 4.318"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.621 4.111a4.2 4.2 0 0 0-5.817.123L7.018 7.02M4.109 15.623a4.203 4.203 0 0 1 .123-5.817M8.376 19.891a4.203 4.203 0 0 0 5.817-.122l2.786-2.787M19.766 14.196a4.2 4.2 0 0 0 .122-5.817M8.537 15.381c.519-.09 1.03-.14 1.63-.742 1.133-1.133.325-1.942 1.457-3.075 1.133-1.132 1.942-.323 3.067-1.447.566-.567.647-1.052.728-1.538"
    />
  </Svg>
);
export default IconlystSandwichHotdogBroken;
