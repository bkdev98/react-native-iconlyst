import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdLoveBulk = ({
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
      fillRule="evenodd"
      d="M3.301 9.895a.3.3 0 0 0-.3.3v4.4c0 2.79 1.79 4.67 4.46 4.67h5.265c.251 0 .396-.296.258-.507a6.4 6.4 0 0 1-.662-1.343c-.81-2.46.35-4.93 2.62-5.68a4.18 4.18 0 0 1 2.543-.031c.063.02.13.019.192-.001a4.16 4.16 0 0 1 3.748.62c.22.163.576.017.576-.258v-1.87a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.997 8.014c0-2.793-1.794-4.67-4.464-4.67H7.462c-2.67 0-4.463 1.877-4.463 4.67v.08a.3.3 0 0 0 .3.3h18.398a.3.3 0 0 0 .3-.3zM19.977 16.47a3.3 3.3 0 0 1-.769 1.258c-.479.466-1.003.892-1.589 1.288a11 11 0 0 1-1.592-1.272 3.24 3.24 0 0 1-.786-1.223c-.232-.71-.048-1.605.754-1.868q.195-.066.396-.065c.267 0 .531.086.749.25.269.202.64.202.907-.002a1.27 1.27 0 0 1 1.143-.207c.806.257 1.004 1.149.787 1.842m-.339-3.273a2.8 2.8 0 0 0-2.049.166 2.75 2.75 0 0 0-2.066-.135c-1.487.49-2.237 2.14-1.702 3.776a4.76 4.76 0 0 0 1.164 1.82 12.3 12.3 0 0 0 2.176 1.675l.11.062a.76.76 0 0 0 .727-.006l.112-.064a13 13 0 0 0 2.158-1.703q.78-.799 1.136-1.854c.507-1.617-.265-3.257-1.766-3.737"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCarrdLoveBulk;
