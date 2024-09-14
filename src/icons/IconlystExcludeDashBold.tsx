import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExcludeDashBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M17.361 12.305a.672.672 0 0 1-1.344 0l-.001-.124c0-2.242-1.37-3.691-3.49-3.691h-.641l-.001-.001-.001-.001a.67.67 0 0 1 .001-1.34q0-.003.002-.003h.685c2.865 0 4.79 2.013 4.79 5.008zm-5.746 5.563zl-.001.002h-.188c-2.78 0-4.658-1.906-4.766-4.756v-.001l-.002-.001v-.015q0-.002.002-.002l.002-.002a.669.669 0 0 1 1.337 0q0 .001.003.002.001 0 .002.002c.107 2.087 1.436 3.428 3.468 3.428h.143l.001.002a.67.67 0 0 1 0 1.34m5.963-14.86h-6.036c-2.305 0-3.815 1.74-3.901 3.937-.004.11.086.2.196.2h1.68l.001.001q0 .002.002.002a.671.671 0 0 1-.016 1.342H8.182a.2.2 0 0 0-.2.2v1.695a.672.672 0 0 1-1.345-.001v-2.04c0-.11-.09-.2-.2-.195C4.14 8.236 2.5 9.83 2.5 12.225v5.687c0 2.45 1.576 4.097 3.921 4.097h6.035c2.306 0 3.815-1.742 3.901-3.94a.194.194 0 0 0-.196-.2h-2.155l-.001-.001a.67.67 0 0 1 .001-1.341q0-.002.002-.002h1.808a.2.2 0 0 0 .2-.2V14.92q0-.003.003-.003l.003-.003a.67.67 0 0 1 .667-.646c.362 0 .653.287.667.646q0 .003.002.003.003 0 .003.002v1.75c0 .111.09.201.2.197 2.296-.087 3.939-1.681 3.939-4.075V7.104c0-2.45-1.576-4.096-3.922-4.096"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystExcludeDashBold;
