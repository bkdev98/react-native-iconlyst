import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuotationOpenOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M16.717 22.516H8.283c-3.309 0-5.533-2.321-5.533-5.776V8.792c0-3.455 2.224-5.776 5.533-5.776h8.435c3.308 0 5.532 2.32 5.532 5.776v7.948c0 3.455-2.224 5.776-5.533 5.776m-8.434-18c-2.45 0-4.033 1.679-4.033 4.276v7.948c0 2.6 1.583 4.276 4.033 4.276h8.434c2.45 0 4.033-1.68 4.033-4.276V8.792c0-2.6-1.583-4.276-4.032-4.276z"
    />
    <Path
      fill={props.color}
      d="M9.25 16.98a3.02 3.02 0 0 1-2.45-1.252 3.96 3.96 0 0 1-.4-3.361 6.68 6.68 0 0 1 2.552-3.672.75.75 0 0 1 .873 1.218 5.25 5.25 0 0 0-1.976 2.847 2.55 2.55 0 0 0 .18 2.1 1.54 1.54 0 0 0 1.59.567 1.42 1.42 0 0 0 .986-.99 1.54 1.54 0 0 0-.313-1.468 1.6 1.6 0 0 0-1.1-.524.751.751 0 0 1 .069-1.5 3.08 3.08 0 0 1 2.154 1.027 3.03 3.03 0 0 1 .629 2.888 2.92 2.92 0 0 1-2.793 2.12M15.877 16.98a3.02 3.02 0 0 1-2.449-1.252 3.95 3.95 0 0 1-.4-3.361 6.68 6.68 0 0 1 2.551-3.672.75.75 0 1 1 .873 1.218 5.25 5.25 0 0 0-1.976 2.847 2.55 2.55 0 0 0 .181 2.1 1.54 1.54 0 0 0 1.59.567 1.42 1.42 0 0 0 .985-.99 1.54 1.54 0 0 0-.313-1.468 1.6 1.6 0 0 0-1.1-.524.751.751 0 0 1 .07-1.5 3.08 3.08 0 0 1 2.153 1.027 3.03 3.03 0 0 1 .63 2.888 2.9 2.9 0 0 1-2.79 2.114z"
    />
  </Svg>
);
export default IconlystQuotationOpenOutline;
