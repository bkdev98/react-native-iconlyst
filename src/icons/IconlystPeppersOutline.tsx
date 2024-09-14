import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPeppersOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M18.566 7.991c.78.1 1.429.557 1.917 1.221 2.418 3.288 1.058 7.302-1.361 9.724-1.225 1.227-2.788 2.13-4.427 2.382-1.664.255-3.38-.169-4.798-1.55a.75.75 0 0 1 .648-1.277c1.067.18 2.644-.36 3.804-1.455 1.128-1.066 1.705-2.503 1.108-4.053l-.025-.063c-.276-.717-.597-1.546-.469-2.384.148-.967.868-1.497 1.354-1.854l.008-.006c.7-.514 1.467-.784 2.24-.685m-.191 1.488c-.285-.037-.674.047-1.161.405-.538.395-.725.594-.768.878-.06.392.088.845.41 1.681.88 2.282-.05 4.334-1.477 5.683a7.3 7.3 0 0 1-2.693 1.61c.58.167 1.18.191 1.781.1 1.26-.194 2.544-.909 3.594-1.96 2.13-2.133 3.022-5.317 1.214-7.775-.308-.42-.621-.586-.9-.622M13.24 4.984c.543.411.826 1.03.904 1.716.38 3.353-2.25 5.648-4.938 6.377-1.365.37-2.846.376-4.121-.117-1.3-.502-2.358-1.517-2.806-3.091a.75.75 0 0 1 1.198-.785c.624.514 1.883.77 3.096.478 1.17-.281 2.085-1.014 2.276-2.254l.01-.065c.092-.6.206-1.34.655-1.903.527-.662 1.294-.748 1.77-.802l.02-.002c.716-.082 1.4.04 1.937.448m-.906 1.195c-.144-.11-.406-.205-.862-.153-.538.061-.684.123-.784.249-.17.212-.245.542-.356 1.262-.312 2.014-1.838 3.106-3.409 3.483a6 6 0 0 1-2.063.127q.35.255.766.414c.917.355 2.062.374 3.188.068 2.293-.621 4.104-2.43 3.84-4.76-.044-.385-.18-.584-.32-.69"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.805 5.645a.75.75 0 0 1-.401.982c-.403.17-.613.37-.726.551s-.166.403-.154.675c.027.576.347 1.27.778 1.856a.75.75 0 1 1-1.208.889c-.516-.7-1.022-1.68-1.068-2.675a2.63 2.63 0 0 1 .38-1.54c.307-.49.785-.873 1.417-1.139a.75.75 0 0 1 .982.401M14.136 3.277a.75.75 0 0 1-.66.83c-.27.03-.552.242-.774.766a3.56 3.56 0 0 0-.236 1.684.75.75 0 0 1-1.491.169 5.06 5.06 0 0 1 .345-2.438c.323-.76.947-1.554 1.986-1.671a.75.75 0 0 1 .83.66"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPeppersOutline;
