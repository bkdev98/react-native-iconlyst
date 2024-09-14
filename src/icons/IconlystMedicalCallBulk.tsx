import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMedicalCallBulk = ({
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
      d="M20.163 3.83a4.57 4.57 0 0 0-6.45.01 4.58 4.58 0 0 0-.95 5.08c0 .1-.03.25-.05.41-.11.82-.16 1.43.19 1.77.34.35.95.3 1.77.19.17-.03.32-.05.41-.05.59.26 1.22.39 1.85.39 1.19 0 2.36-.46 3.23-1.34a4.575 4.575 0 0 0 0-6.46"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.108 15.634a37 37 0 0 1-.669-.649c-1.127-1.122-2.095-.742-2.874-.435-.925.365-1.725.677-3.256-.854-1.533-1.533-1.22-2.333-.858-3.259.305-.78.684-1.749-.442-2.87a40 40 0 0 1-.649-.673c-.816-.86-1.406-1.482-2.253-1.492-.749-.044-1.485.443-2.605 1.564a1 1 0 0 0-.077.08c-.25.244-.916.895-.923 2.164-.01 1.955 1.558 4.521 4.664 7.623 3.092 3.095 5.65 4.663 7.604 4.663h.024c1.272-.008 1.922-.676 2.167-.928l-.358-.349.435.273c1.118-1.114 1.57-1.867 1.562-2.595-.01-.85-.63-1.443-1.492-2.263"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M17.693 7.81h.62a.749.749 0 1 0 0-1.5h-.62v-.63a.749.749 0 1 0-1.5 0v.63h-.63a.749.749 0 1 0 0 1.5h.63v.64a.749.749 0 1 0 1.5 0z"
    />
  </Svg>
);
export default IconlystMedicalCallBulk;
