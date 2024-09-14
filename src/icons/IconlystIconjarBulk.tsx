import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIconjarBulk = ({
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
      d="M6.403 8.338h.003a757 757 0 0 1 3.987-.002l6.955-.001c.076-.008.14-.002.205-.014.341-.057.633-.298.763-.63a.94.94 0 0 0-.137-.935 2 2 0 0 0-.633-.506 5 5 0 0 0-1.088-.414c-.729-.195-1.54-.313-2.478-.362-.275-.015-.536-.032-.828-.022-.032-.005-.064-.002-.103-.01l.031-.03.135-.101q.12-.09.235-.182a.96.96 0 0 0 .324-.442q.134-.417-.114-.83a1.3 1.3 0 0 0-.546-.48 2.6 2.6 0 0 0-1.063-.265 5 5 0 0 0-.464.008q-.341.023-.664.129a1.7 1.7 0 0 0-.687.398c-.22.219-.329.477-.327.766.004.27.115.5.342.705.07.064.146.12.221.178l.108.082q.047.036.083.073h-.099q-.352.005-.704.02-.226.01-.454.026c-.688.052-1.298.146-1.864.286-.376.093-.868.232-1.33.482-.238.128-.415.26-.556.414-.107.116-.253.302-.27.562-.018.284.08.554.277.764.196.209.472.333.74.333"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.034 12.825a.7.7 0 0 1-.239-.496.56.56 0 0 1 .181-.41c.403-.392.61-.857.595-1.344a1.67 1.67 0 0 0-1.683-1.626h-.872a2.31 2.31 0 0 0-2.294 1.905c-.149.866.125 1.631.39 2.372.245.685.476 1.332.321 1.978-.128.538-.622.893-1.222.836a1.22 1.22 0 0 1-.895-.482c-.222-.295-.273-.664-.155-1.122.064-.243.164-.477.263-.713.175-.42.358-.857.397-1.365.042-.534.04-1.316-.202-2.012a2.06 2.06 0 0 0-1.973-1.397H7.111a1.67 1.67 0 0 0-1.682 1.626c-.014.486.192.952.593 1.342.12.118.184.261.182.413a.7.7 0 0 1-.236.493c-.793.738-1.099 1.692-.909 2.838.097.58.22 1.157.341 1.731q.117.542.223 1.08a2.97 2.97 0 0 0 2.915 2.417h6.924a2.97 2.97 0 0 0 2.915-2.416q.107-.549.226-1.099c.12-.569.242-1.139.337-1.713.191-1.146-.115-2.1-.906-2.836"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystIconjarBulk;
