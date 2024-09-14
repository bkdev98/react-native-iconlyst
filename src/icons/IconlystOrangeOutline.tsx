import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOrangeOutline = ({
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
      d="M2.25 13.908c0-4.319 3.706-7.743 8.18-7.743s8.18 3.424 8.18 7.743q0 .415-.046.82a.75.75 0 0 1-1.49-.166q.036-.322.036-.654c0-3.406-2.947-6.243-6.68-6.243s-6.68 2.837-6.68 6.243 2.947 6.243 6.68 6.243c.71 0 1.394-.104 2.034-.295a.75.75 0 1 1 .43 1.437 8.6 8.6 0 0 1-2.464.358c-4.474 0-8.18-3.425-8.18-7.743"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.93 3.37a.75.75 0 0 0-.86-.622c-1.352.217-2.318 1.183-2.923 2.2-.606 1.018-.932 2.218-.932 3.15a.75.75 0 1 0 1.5 0c0-.636.239-1.573.721-2.383.483-.812 1.129-1.367 1.872-1.486a.75.75 0 0 0 .621-.86"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.237 6.13c-1.641-.145-2.29-.7-2.594-1.167-.197-.301-.301-.642-.374-1.004l-.017-.084c2.114.126 2.638.69 2.81 1.037.122.248.155.545.167.95l.004.131zm1.17-1.881c-.607-1.231-2.102-1.9-5.07-1.9a.75.75 0 0 0-.712.987c.02.06.041.158.07.332l.02.116c.022.138.05.304.083.471.09.445.243.997.588 1.527.731 1.122 2.137 1.883 4.72 1.883a.75.75 0 0 0 .69-1.045.9.9 0 0 1-.047-.258c-.009-.113-.012-.228-.016-.371l-.004-.176c-.013-.417-.045-1.003-.322-1.566M8.114 15.988c-.188-1.022.577-2.006 1.654-2.006l10.3.001c1.076 0 1.841.984 1.653 2.006a6.926 6.926 0 0 1-6.802 5.662 6.92 6.92 0 0 1-6.805-5.663m1.654-.506c-.103 0-.204.097-.179.235a5.42 5.42 0 0 0 5.33 4.434m-5.151-4.669 10.299.001c.103 0 .204.097.179.235a5.426 5.426 0 0 1-5.327 4.433m-5.151-4.669"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.333 14.202a.75.75 0 0 1 1.037-.023l4.571 4.19a.75.75 0 1 1-1.014 1.107l-4.041-3.706-3.826 3.826a.75.75 0 1 1-1.06-1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.864 13.982a.75.75 0 0 1 .75.75l-.005 6.166a.75.75 0 1 1-1.5-.001l.004-6.165a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOrangeOutline;
