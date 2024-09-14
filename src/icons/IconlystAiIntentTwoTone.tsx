import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiIntentTwoTone = ({
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
      d="M4.893 10.24a7.07 7.07 0 0 0 4.317 6.518v1.582a2.805 2.805 0 0 0 2.796 2.797 2.805 2.805 0 0 0 2.797-2.797v-1.57c2.958-1.25 4.883-4.51 4.15-8.046-.566-2.707-2.755-4.883-5.46-5.437-4.571-.925-8.6 2.538-8.6 6.953M12.267 16.777h2.544"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.74 6.756 9.225 10.22a.374.374 0 0 0 .303.593h2.057v2.175c0 .362.463.513.676.22l2.515-3.464a.374.374 0 0 0-.303-.594h-2.057V6.976a.374.374 0 0 0-.676-.22"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAiIntentTwoTone;
