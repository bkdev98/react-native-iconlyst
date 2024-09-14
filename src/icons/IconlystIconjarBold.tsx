import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIconjarBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.034 13.335a.7.7 0 0 1-.239-.497.56.56 0 0 1 .181-.41c.403-.392.61-.857.595-1.344a1.67 1.67 0 0 0-1.683-1.625h-.872a2.31 2.31 0 0 0-2.294 1.905c-.149.865.125 1.63.39 2.371.245.686.476 1.333.321 1.979-.128.537-.622.893-1.222.835a1.22 1.22 0 0 1-.895-.482c-.222-.294-.273-.664-.155-1.122.064-.242.164-.476.263-.713.175-.42.358-.856.397-1.364.042-.534.04-1.316-.202-2.013a2.06 2.06 0 0 0-1.973-1.396H7.111a1.67 1.67 0 0 0-1.682 1.626c-.014.485.192.951.593 1.342.12.117.184.26.182.412a.7.7 0 0 1-.236.493c-.793.738-1.099 1.692-.909 2.839.097.58.22 1.157.341 1.73q.117.543.223 1.08a2.97 2.97 0 0 0 2.915 2.417h6.924a2.97 2.97 0 0 0 2.915-2.415q.107-.55.226-1.1c.12-.569.242-1.139.337-1.712.191-1.146-.115-2.101-.906-2.836M6.403 8.846h.003a757 757 0 0 1 3.987-.002h6.955c.076-.009.14-.003.205-.015.341-.057.633-.298.763-.63a.94.94 0 0 0-.137-.935 2 2 0 0 0-.633-.506 5 5 0 0 0-1.088-.414c-.729-.195-1.54-.313-2.478-.362-.275-.015-.536-.032-.828-.022-.032-.005-.064-.002-.103-.01l.031-.029.135-.102q.12-.089.235-.182a.96.96 0 0 0 .324-.442q.134-.418-.114-.829a1.3 1.3 0 0 0-.546-.48 2.6 2.6 0 0 0-1.063-.266 5 5 0 0 0-.464.008q-.341.022-.664.13a1.7 1.7 0 0 0-.687.397q-.33.331-.327.766c.004.27.115.5.342.705q.107.094.221.178l.108.082q.047.036.083.073l-.099.001q-.352.004-.704.02-.226.009-.454.025c-.688.052-1.298.146-1.864.286-.376.093-.868.232-1.33.482-.238.128-.415.26-.556.414-.107.116-.253.302-.27.562-.018.284.08.554.277.764.196.21.472.333.74.333"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIconjarBold;
