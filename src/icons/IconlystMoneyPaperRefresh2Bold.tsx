import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperRefresh2Bold = ({
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
      d="M11 9.22a1.54 1.54 0 0 0 0 3.08 1.54 1.54 0 0 0 0-3.08"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11 13.8a3.04 3.04 0 0 1-3.039-3.04A3.04 3.04 0 0 1 11 7.72a3.04 3.04 0 0 1 3.038 3.04A3.04 3.04 0 0 1 11 13.8M6.616 7.96H5.214a.75.75 0 0 1 0-1.5h1.403a.75.75 0 0 1 0 1.5m12.912 3.323q.317.002.627.036c.182.02.345-.12.345-.304V7.061c0-2.303-1.483-3.85-3.69-3.85H5.187C2.981 3.21 1.5 4.758 1.5 7.06v7.4c0 2.303 1.482 3.85 3.688 3.85h7.438a.304.304 0 0 0 .3-.32l-.002-.102a6.606 6.606 0 0 1 6.605-6.606M21.748 18.084a.75.75 0 0 0-1.024.271 2.05 2.05 0 0 1-1.77 1.017c-.193 0-.37-.044-.539-.105a.74.74 0 0 0 .523-.704.75.75 0 0 0-.75-.75h-1.72c-.034 0-.062.014-.094.018l-.045.009a.8.8 0 0 0-.232.084q-.01.002-.02.008c-.01.006-.016.017-.026.023a.72.72 0 0 0-.29.39 1 1 0 0 0-.027.133c-.004.028-.017.053-.017.084v1.6c0 .415.336.75.75.75a.74.74 0 0 0 .718-.59c.478.309 1.07.55 1.77.55a3.55 3.55 0 0 0 3.065-1.764.75.75 0 0 0-.272-1.024"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.484 16.163c.003-.028.016-.052.016-.08v-1.72a.75.75 0 0 0-1.5 0v.001a3.9 3.9 0 0 0-2.046-.572 3.56 3.56 0 0 0-3.077 1.776.75.75 0 0 0 1.3.748 2.03 2.03 0 0 1 1.777-1.024c.278 0 .52.053.745.125a.75.75 0 0 0-.42.665c0 .415.336.75.75.75h1.684c.014.001.025.01.038.01a.75.75 0 0 0 .385-.106c.044-.026.072-.066.108-.099q.027-.021.052-.047a.7.7 0 0 0 .113-.168 1 1 0 0 0 .04-.085.7.7 0 0 0 .035-.174"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperRefresh2Bold;
