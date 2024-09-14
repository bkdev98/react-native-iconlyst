import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardAiOutline = ({
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
      d="M3.52 5.025c.843-.904 2.04-1.406 3.445-1.406h10.07c1.407 0 2.605.502 3.448 1.407.837.898 1.267 2.134 1.267 3.51v3.075a.75.75 0 0 1-1.5 0V8.535c0-1.065-.33-1.913-.865-2.487-.529-.568-1.313-.929-2.35-.929H6.965c-1.033 0-1.818.36-2.348.93-.536.574-.867 1.422-.867 2.486v6.588c0 1.066.33 1.914.865 2.488.529.568 1.313.929 2.35.929h4.08a.75.75 0 0 1 0 1.5h-4.08c-1.407 0-2.606-.502-3.448-1.407-.837-.899-1.267-2.134-1.267-3.51V8.535c0-1.376.432-2.611 1.27-3.51"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.2 9.344a.75.75 0 0 1 .75-.75h10.098a.75.75 0 0 1 0 1.5H6.951a.75.75 0 0 1-.75-.75M18.404 13.34a.75.75 0 0 1 .704.49l.1.274a3.01 3.01 0 0 0 1.78 1.782l.273.1a.75.75 0 0 1 0 1.407l-.273.102a3.01 3.01 0 0 0-1.78 1.781l-.1.274a.75.75 0 0 1-1.407 0l-.101-.274a3.01 3.01 0 0 0-1.779-1.781l-.273-.102a.75.75 0 0 1 0-1.406l.273-.101a3.01 3.01 0 0 0 1.779-1.782l.1-.273a.75.75 0 0 1 .704-.49m-.948 3.35c.361.268.681.588.948.95.268-.362.587-.682.949-.95a4.5 4.5 0 0 1-.949-.95 4.5 4.5 0 0 1-.948.95M12.407 12.58a.75.75 0 0 1 .718.531c.099.326.353.58.678.68a.75.75 0 0 1 0 1.434 1.02 1.02 0 0 0-.678.68.75.75 0 0 1-1.435 0 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.435 1.02 1.02 0 0 0 .678-.679.75.75 0 0 1 .717-.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCardAiOutline;
