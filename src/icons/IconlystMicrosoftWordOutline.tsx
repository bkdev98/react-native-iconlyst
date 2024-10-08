import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftWordOutline = ({
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
      d="M8.016 3.826c.605-.649 1.46-1.002 2.445-1.002h7.951c.985 0 1.839.354 2.442 1.003.598.644.894 1.517.894 2.465v11.413c0 .948-.296 1.821-.894 2.465-.603.65-1.457 1.003-2.442 1.003h-7.95c-.985 0-1.84-.353-2.446-1.002-.6-.642-.9-1.516-.9-2.466v-.835a.75.75 0 0 1 1.5 0v.835c0 .638.198 1.123.496 1.443.293.313.736.525 1.35.525h7.95c.614 0 1.053-.212 1.343-.524.296-.319.493-.805.493-1.444V6.292c0-.64-.197-1.125-.493-1.444-.29-.312-.73-.524-1.343-.524h-7.95c-.614 0-1.057.212-1.35.526-.298.319-.497.805-.497 1.442v.835a.75.75 0 1 1-1.5 0v-.835c0-.95.3-1.823.9-2.466"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.149 7.38c.604-.649 1.458-1.001 2.439-1.001h4.564c.983 0 1.837.352 2.441 1.001.599.643.897 1.517.897 2.47v4.3c0 .951-.298 1.825-.897 2.468-.604.65-1.458 1.002-2.441 1.002H5.588c-.983 0-1.837-.352-2.441-1.002-.599-.643-.897-1.517-.897-2.469v-4.3c0-.953.3-1.826.899-2.47m1.097 1.023c-.297.318-.496.805-.496 1.446v4.3c0 .643.198 1.129.495 1.447.29.313.73.524 1.343.524h4.564c.612 0 1.052-.211 1.343-.524.296-.318.495-.804.495-1.447v-4.3c0-.642-.199-1.128-.495-1.447-.29-.312-.73-.523-1.343-.523H5.588c-.61 0-1.05.21-1.342.524"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.324 9.606a.75.75 0 0 1 .925.518l.36 1.273.568-1.358a.75.75 0 0 1 1.384 0l.57 1.359.359-1.274a.75.75 0 1 1 1.443.408l-.943 3.34a.75.75 0 0 1-1.414.086L7.87 12.27l-.706 1.688a.75.75 0 0 1-1.413-.086l-.944-3.34a.75.75 0 0 1 .518-.926M11.429 15.973a.75.75 0 0 1 .75-.75h8.82a.75.75 0 1 1 0 1.5h-8.82a.75.75 0 0 1-.75-.75M11.992 11.996a.75.75 0 0 1 .75-.75H21a.75.75 0 0 1 0 1.5h-8.257a.75.75 0 0 1-.75-.75M11.42 8.023a.75.75 0 0 1 .75-.75H21a.75.75 0 0 1 0 1.5h-8.83a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMicrosoftWordOutline;
