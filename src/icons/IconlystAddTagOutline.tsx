import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddTagOutline = ({
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
      d="M13.099 21.816a3.84 3.84 0 0 1-2.71-1.133l-2.082-2.078q-2.085-2.077-4.158-4.162a5.44 5.44 0 0 1-1.6-3.38c-.064-.707-.056-2.65-.043-4.415v-.74a3.8 3.8 0 0 1 3.1-3.679c.252-.04 1.327-.044 4.573-.049h.6a5.54 5.54 0 0 1 4.052 1.682l1.431 1.442a.75.75 0 0 1-1.059 1.063l-1.432-1.444a4.04 4.04 0 0 0-2.992-1.243h-.6c-1.3 0-4.021 0-4.342.03a2.3 2.3 0 0 0-1.829 2.2v.746c-.009 1.25-.025 3.577.037 4.266a3.92 3.92 0 0 0 1.166 2.463 715 715 0 0 0 4.151 4.155l2.082 2.078a2.27 2.27 0 0 0 3.264.024q1.082-1.07 2.156-2.144a.75.75 0 1 1 1.061 1.061c-.718.72-1.439 1.432-2.16 2.147a3.79 3.79 0 0 1-2.666 1.11"
    />
    <Path
      fill={props.color}
      d="M8.602 10.632h-.006A2.367 2.367 0 1 1 8.63 5.9h.008a2.3 2.3 0 0 1 1.639.692 2.38 2.38 0 0 1 .7 1.695 2.367 2.367 0 0 1-2.375 2.346M8.63 7.4a.866.866 0 0 0-.361 1.666.9.9 0 0 0 .33.07.874.874 0 0 0 .87-.852.89.89 0 0 0-.524-.815.8.8 0 0 0-.314-.067zM21.253 12.172h-5a.75.75 0 1 1 0-1.5h5a.75.75 0 0 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M18.753 14.664a.75.75 0 0 1-.75-.75v-5a.75.75 0 1 1 1.5 0v5a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystAddTagOutline;
