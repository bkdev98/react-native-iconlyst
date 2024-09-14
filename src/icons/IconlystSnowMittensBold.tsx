import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowMittensBold = ({
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
      d="M12.176 10.43a.75.75 0 0 1-.75 1.299l-.893-.515v1.03a.75.75 0 0 1-1.5 0v-1.032l-.897.518a.747.747 0 0 1-1.024-.275.75.75 0 0 1 .274-1.024l.895-.517-.895-.516a.75.75 0 0 1 .75-1.3l.896.518V7.582a.75.75 0 0 1 1.5 0v1.032l.893-.515a.751.751 0 0 1 .75 1.299l-.894.516zm7.228-.965a2.743 2.743 0 0 0-3.87 0l-.18.19v-1.22c0-3.07-2.5-5.57-5.57-5.57s-5.57 2.5-5.57 5.57v7.48c0 .235.263.383.48.293a3.65 3.65 0 0 1 1.41-.273h7.69c.766 0 1.462.224 2.013.605.127.088.301.081.41-.028l3.188-3.177c.51-.52.8-1.2.8-1.94a2.7 2.7 0 0 0-.8-1.93M13.739 19.849a.75.75 0 0 1-1.5 0v-.395a.75.75 0 0 1 1.5 0zm-3.041 0a.75.75 0 0 1-1.5 0v-.395a.75.75 0 0 1 1.5 0zm-3.041 0a.75.75 0 0 1-1.5 0v-.395a.75.75 0 0 1 1.5 0zm6.136-2.91H6.102c-1.337 0-2.306.87-2.306 2.069l-.001 1.286c0 1.2.969 2.07 2.306 2.07h7.692c1.337 0 2.306-.87 2.306-2.07v-1.286c0-1.198-.97-2.068-2.306-2.068"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSnowMittensBold;
