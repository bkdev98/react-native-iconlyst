import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBackwardCircleBold = ({
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
      d="M15.23 9.867c-.119-.07-.306-.062-.514.02a8.5 8.5 0 0 0-2.504 1.588c-.127.118-.275.305-.274.53 0 .223.147.405.271.518a8.5 8.5 0 0 0 2.517 1.594c.19.08.368.084.493.012.143-.081.192-.25.209-.377a16.6 16.6 0 0 0-.004-3.52c-.01-.091-.053-.282-.194-.365"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.916 13.931c-.086.669-.424 1.197-.951 1.5-.29.166-.617.249-.955.249a2.2 2.2 0 0 1-.864-.181 9.9 9.9 0 0 1-2.952-1.872c-.484-.444-.754-1.019-.757-1.616-.002-.601.266-1.182.756-1.638l.005-.004a10 10 0 0 1 2.958-1.874c.658-.262 1.309-.232 1.838.081.513.303.84.832.921 1.487.139 1.348.138 2.645.001 3.868m-5.64 1.701a.75.75 0 0 1-1.039.216c-.074-.049-1.838-1.212-2.614-2.13-.859-1.003-.86-2.417-.002-3.436.728-.85 2.419-1.998 2.609-2.126a.751.751 0 0 1 .838 1.244c-.471.317-1.803 1.268-2.304 1.852a1.126 1.126 0 0 0 .001 1.494c.531.627 1.837 1.546 2.296 1.848a.75.75 0 0 1 .215 1.038M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBackwardCircleBold;
