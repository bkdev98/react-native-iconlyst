import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReelsLikeTwoTone = ({
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
      d="M20.462 11.066v-3.3c0-2.792-1.74-4.766-4.535-4.766H7.93C5.132 3 3.393 4.974 3.393 7.767v7.613c0 2.792 1.74 4.766 4.536 4.766h3.608"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.4 7.468h17.056m-11.5 0V3M14.9 7.468V3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.65 17.193c-.434-1.358.074-2.907 1.498-3.366a2.43 2.43 0 0 1 2.2.37 2.44 2.44 0 0 1 2.193-.37c1.424.459 1.936 2.008 1.502 3.366-.676 2.15-3.696 3.807-3.696 3.807s-2.996-1.632-3.697-3.807"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReelsLikeTwoTone;
