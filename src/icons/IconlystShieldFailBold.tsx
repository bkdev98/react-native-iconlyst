import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldFailBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M11.34 2.104a1.87 1.87 0 0 1 1.229 0L19.2 4.329a1.8 1.8 0 0 1 1.248 1.697l.05 6.638a8.24 8.24 0 0 1-2.073 5.492c-.614.706-1.409 1.304-2.415 1.844l-3.573 1.912a.75.75 0 0 1-.352.088.8.8 0 0 1-.363-.088L8.12 20.049c-1.016-.53-1.812-1.118-2.436-1.814a8.22 8.22 0 0 1-2.143-5.472l-.04-6.64c-.01-.765.492-1.45 1.227-1.706Zm-.704 7.255a.774.774 0 0 0-1.067 0 .73.73 0 0 0 0 1.04l1.36 1.323-1.36 1.325a.726.726 0 0 0 0 1.04.76.76 0 0 0 .534.214.72.72 0 0 0 .533-.214l1.359-1.324 1.359 1.324a.76.76 0 0 0 .533.214.74.74 0 0 0 .534-.214.726.726 0 0 0 0-1.04l-1.36-1.325 1.36-1.322a.73.73 0 0 0 0-1.04.774.774 0 0 0-1.067 0l-1.359 1.324Z"
    />
  </Svg>
);
export default IconlystShieldFailBold;
