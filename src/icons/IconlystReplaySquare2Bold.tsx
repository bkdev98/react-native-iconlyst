import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplaySquare2Bold = ({
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
      d="M16.705 13.504c0 .799-.325 1.578-.891 2.135a2.99 2.99 0 0 1-2.135.886H9.864l.389.39a.751.751 0 0 1-1.063 1.059l-1.663-1.67c-.007-.007-.009-.017-.015-.024a.7.7 0 0 1-.146-.22.8.8 0 0 1-.05-.247c0-.014-.007-.025-.007-.038a.77.77 0 0 1 .22-.531l1.663-1.66a.749.749 0 1 1 1.059 1.06l-.38.38h3.808c.408 0 .79-.16 1.076-.448.288-.283.45-.672.45-1.072v-1.04a.75.75 0 0 1 1.5 0zm-9.398-2.54c0-.8.324-1.577.891-2.134a2.99 2.99 0 0 1 2.134-.886h3.808l-.38-.38a.751.751 0 0 1 1.06-1.06l1.663 1.66a.76.76 0 0 1 .22.53.74.74 0 0 1-.22.53l-1.663 1.66a.75.75 0 0 1-1.061 0 .75.75 0 0 1 .001-1.061l.38-.38h-3.808c-.407 0-.789.16-1.076.45a1.5 1.5 0 0 0-.449 1.07v1.04a.75.75 0 0 1-1.5 0zm8.909-8.21H7.785c-3.15 0-5.274 2.214-5.285 5.51v7.95c0 3.308 2.123 5.53 5.285 5.53h8.431c3.16 0 5.284-2.222 5.284-5.53v-7.95c0-3.296-2.124-5.51-5.284-5.51"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReplaySquare2Bold;
