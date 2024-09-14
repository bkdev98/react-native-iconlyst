import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdStarBold = ({
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
      d="M21.073 8.272c0-2.793-1.794-4.67-4.464-4.67H6.54c-2.67 0-4.464 1.877-4.464 4.67v.08a.3.3 0 0 0 .3.3h18.398a.3.3 0 0 0 .3-.3zM12.514 15.905c0-.61.25-1.2.68-1.63.03-.02.06-.05.09-.07.33-.3.73-.48 1.16-.55l.865-.127a.3.3 0 0 0 .225-.164l.37-.749c.26-.54.73-.95 1.3-1.14.55-.19 1.17-.16 1.71.08.47.24.79.54 1.01.92.03.05.06.09.08.14l.37.749a.3.3 0 0 0 .227.164l.13.018a.3.3 0 0 0 .343-.297v-2.794a.3.3 0 0 0-.3-.3h-18.4a.3.3 0 0 0-.3.3v4.4c0 2.79 1.79 4.67 4.46 4.67h6.88a.33.33 0 0 0 .319-.299c.033-.282.103-.566.16-.842a.3.3 0 0 0-.085-.27l-.594-.569c-.45-.44-.7-1.03-.7-1.64"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.316 16.813a.98.98 0 0 0-.315.924l.134.765-.729-.384a1.07 1.07 0 0 0-.922.013l-.71.372.135-.773a1.04 1.04 0 0 0-.297-.907l-.559-.535.825-.12c.31-.066.57-.26.72-.55l.354-.716.36.728c.142.272.407.472.763.546l.78.113zm2.398-1.476a1 1 0 0 0-.669-.392l-1.505-.215-.674-1.36-.022-.042a1.1 1.1 0 0 0-.467-.432c-.264-.118-.547-.125-.71-.048a.99.99 0 0 0-.629.521l-.674 1.36-1.526.22a1.1 1.1 0 0 0-.553.28 1 1 0 0 0-.3.722c0 .273.108.53.31.726l1.091 1.048-.26 1.493a.97.97 0 0 0 .108.648c.264.485.86.674 1.37.418l1.353-.708 1.341.707q.214.115.477.116.093 0 .193-.016c.533-.104.892-.608.814-1.174l-.26-1.477 1.083-1.052a.995.995 0 0 0 .11-1.343"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCarrdStarBold;
