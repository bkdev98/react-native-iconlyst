import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiIntentBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.492 3.287c-4.57-.925-8.6 2.538-8.6 6.953a7.07 7.07 0 0 0 4.318 6.518v1.582a2.805 2.805 0 0 0 2.796 2.797 2.805 2.805 0 0 0 2.797-2.797v-1.57c2.958-1.25 4.883-4.51 4.15-8.046a7.04 7.04 0 0 0-2.317-3.885M12.267 16.777h2.544"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.225 10.22 2.515-3.464a.374.374 0 0 1 .676.22V9.15h2.057c.306 0 .482.347.303.594l-2.515 3.463a.374.374 0 0 1-.676-.219v-2.175"
    />
  </Svg>
);
export default IconlystAiIntentBroken;
