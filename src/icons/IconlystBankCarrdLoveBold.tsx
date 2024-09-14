import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdLoveBold = ({
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
      d="M21.497 8.018c0-2.793-1.794-4.67-4.465-4.67H6.962c-2.67 0-4.463 1.877-4.463 4.67v.08a.3.3 0 0 0 .3.3h18.398a.3.3 0 0 0 .3-.3zM2.801 9.896a.3.3 0 0 0-.3.3v4.4c0 2.79 1.79 4.67 4.46 4.67h5.264c.252 0 .396-.296.259-.507a6.4 6.4 0 0 1-.663-1.343c-.81-2.46.35-4.93 2.62-5.68.828-.28 1.72-.28 2.544-.03.062.019.13.018.192-.002a4.16 4.16 0 0 1 3.747.62c.221.163.577.017.577-.257v-1.871a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.477 16.475a3.3 3.3 0 0 1-.77 1.257c-.479.466-1.003.892-1.588 1.288a11 11 0 0 1-1.592-1.272 3.24 3.24 0 0 1-.786-1.223c-.232-.71-.048-1.605.754-1.868q.195-.066.396-.065c.266 0 .53.086.749.25.268.202.64.202.907-.002a1.27 1.27 0 0 1 1.142-.207c.806.257 1.005 1.149.788 1.842m-.34-3.274a2.8 2.8 0 0 0-2.049.166 2.75 2.75 0 0 0-2.065-.135c-1.487.49-2.237 2.14-1.703 3.776a4.76 4.76 0 0 0 1.165 1.82 12.3 12.3 0 0 0 2.175 1.675c.01.006.102.056.11.062a.76.76 0 0 0 .727-.006l.113-.064a13 13 0 0 0 2.157-1.703q.78-.799 1.137-1.854c.506-1.617-.265-3.257-1.767-3.737"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCarrdLoveBold;
