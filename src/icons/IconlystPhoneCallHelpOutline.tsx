import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallHelpOutline = ({
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
      d="M17.045 21.75c-2.27 0-5.219-1.8-8.767-5.345s-5.36-6.518-5.348-8.79a3.43 3.43 0 0 1 1.1-2.59c.018-.022.066-.069.085-.088 1.3-1.3 2.187-1.83 3.06-1.83h.027c1.04.014 1.766.778 2.686 1.746.224.236.467.492.738.762a2.79 2.79 0 0 1 .543 3.462c-.4 1.032-.722 1.847.933 3.5s2.47 1.336 3.5.931a2.79 2.79 0 0 1 3.462.54q.402.399.753.73c.973.925 1.741 1.655 1.753 2.7.011.882-.517 1.775-1.825 3.083l-.088.086a3.44 3.44 0 0 1-2.59 1.1zM5.185 5.992s-.044.048-.1.105a1.94 1.94 0 0 0-.652 1.526c-.007 1.276.84 3.653 4.91 7.722 4.05 4.05 6.423 4.9 7.7 4.9h.017a1.95 1.95 0 0 0 1.526-.653q.076-.08.162-.153c.875-.882 1.33-1.538 1.323-1.949-.006-.41-.543-.922-1.287-1.63a49 49 0 0 1-.779-.755c-.672-.67-1.018-.532-1.854-.2-1.164.457-2.758 1.081-5.107-1.266s-1.726-3.943-1.27-5.108c.328-.838.464-1.184-.207-1.855q-.418-.421-.764-.789c-.7-.74-1.212-1.274-1.617-1.28H7.18c-.41 0-1.066.455-2 1.39zM16.33 10.329a.75.75 0 0 1-.75-.75.77.77 0 0 1 .75-.772.73.73 0 0 1 .75.728v.044a.75.75 0 0 1-.75.75M16.33 8.188a.75.75 0 0 1-.75-.741 2.08 2.08 0 0 1 1.32-1.806l.1-.058a.86.86 0 0 0 .543-.8 1.034 1.034 0 0 0-1.033-1.032 1.02 1.02 0 0 0-1.033 1.032.75.75 0 0 1-1.5 0 2.533 2.533 0 1 1 5.066 0 2.35 2.35 0 0 1-1.31 2.108l-.1.058c-.437.245-.556.347-.554.479a.75.75 0 0 1-.74.76z"
    />
  </Svg>
);
export default IconlystPhoneCallHelpOutline;
