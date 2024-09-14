import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReelsLikeBroken = ({
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
      d="M20.212 11.066v-3.3c0-2.792-1.74-4.766-4.535-4.766H7.68C4.882 3 3.143 4.974 3.143 7.767v3.806M11.287 20.148H7.68c-2.797 0-4.536-1.974-4.536-4.766v-1.28M3.15 7.469h17.056M8.707 4.947V3m5.942 4.468V3M17.097 21s-2.996-1.632-3.697-3.807c-.434-1.358.074-2.907 1.498-3.366a2.43 2.43 0 0 1 2.2.37 2.44 2.44 0 0 1 2.194-.37c1.423.459 1.935 2.008 1.501 3.366-.217.692-.678 1.333-1.202 1.884"
    />
  </Svg>
);
export default IconlystReelsLikeBroken;
