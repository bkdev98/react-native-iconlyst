import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewMassageDotHeart2Bold = ({
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
      d="M12.589 14.06c-.5 1.59-2.628 2.773-2.72 2.823l-.12.065-.118-.065c-.09-.05-2.204-1.215-2.721-2.822-.326-1.021.039-2.305 1.215-2.684v-.001a1.58 1.58 0 0 1 1.625.386 1.65 1.65 0 0 1 1.619-.386c1.182.38 1.547 1.664 1.22 2.685m.506-8.771c0-.906.217-1.76.593-2.521h-6.1c-3.12 0-5.214 2.192-5.214 5.455v7.845c0 3.26 2.095 5.453 5.214 5.453h8.324c3.119 0 5.215-2.192 5.215-5.453V10.52a5.7 5.7 0 0 1-2.31.49 5.73 5.73 0 0 1-5.722-5.721"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.77 8.19a2.86 2.86 0 0 0 2.856-2.855 2.86 2.86 0 0 0-2.856-2.856 2.86 2.86 0 0 0-2.855 2.856A2.86 2.86 0 0 0 18.77 8.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNewMassageDotHeart2Bold;
