import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallTickOutline = ({
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
      d="M17 21.566c-2.328 0-5.357-1.848-9-5.494-3.661-3.66-5.51-6.7-5.5-9.03a3.51 3.51 0 0 1 1.128-2.646q.041-.048.088-.091c1.343-1.344 2.259-1.88 3.16-1.875 1.06.013 1.807.8 2.75 1.79q.343.367.758.785a2.85 2.85 0 0 1 .554 3.538c-.4 1.026-.748 1.913.965 3.625s2.6 1.364 3.625.962a2.85 2.85 0 0 1 3.537.55c.276.276.536.524.776.753 1 .947 1.784 1.7 1.8 2.758.01.9-.532 1.817-1.872 3.159l-.091.087a3.5 3.5 0 0 1-2.65 1.13zM4.782 5.359s-.045.049-.105.107A2.02 2.02 0 0 0 4 7.05c-.007 1.317.864 3.768 5.057 7.96 4.193 4.194 6.684 5.082 7.96 5.055a2.02 2.02 0 0 0 1.585-.68q.104-.106.164-.154c.909-.915 1.378-1.595 1.373-2.024s-.562-.96-1.331-1.691a32 32 0 0 1-.8-.777c-.7-.7-1.085-.548-1.93-.215-1.191.468-2.825 1.108-5.232-1.3s-1.768-4.04-1.3-5.231c.33-.846.48-1.232-.218-1.932a39 39 0 0 1-.785-.811c-.728-.766-1.254-1.32-1.681-1.324H6.85c-.43 0-1.108.469-2.075 1.436zM16.84 9.225a.75.75 0 0 1-.531-.22L14.168 6.86a.75.75 0 0 1 1.062-1.059l1.61 1.612 3.88-3.882a.751.751 0 0 1 1.06 1.064l-4.41 4.41a.75.75 0 0 1-.53.22"
    />
  </Svg>
);
export default IconlystPhoneCallTickOutline;
