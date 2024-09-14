import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTowel2Bold = ({
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
      d="m20.25 19.963-13.713.018v-2.883H18.38c.05 0 .1 0 .15-.01.68-.05 1.25-.45 1.72-1.09zM9.74 11.488c0-.41.33-.75.75-.75h1.13a.749.749 0 1 1 0 1.5h-1.13c-.42 0-.75-.33-.75-.75m-3.65 0c0-.41.34-.75.75-.75h1.09c.42 0 .75.34.75.75 0 .42-.33.75-.75.75H6.84c-.41 0-.75-.33-.75-.75m12.3 4.11h-.01c-.461 0-1.237-1.082-1.625-3.11a.306.306 0 0 0-.299-.25H14.13a.749.749 0 1 1 0-1.5h2.1c.173 0 .31-.147.303-.32q-.013-.3-.013-.61c0-3.74 1.23-5.79 1.86-5.79h.01c.64.02 1.86 2.07 1.86 5.79 0 3.73-1.22 5.77-1.86 5.79m3.35-5.44c.01-.01.01-.01 0-.02.01-.11.01-.22.01-.33 0-3.62-1.16-7.29-3.37-7.29H5.61c-2.2 0-3.36 3.67-3.36 7.29q.001.32.01.64a.3.3 0 0 0 .3.29h1.97c.42 0 .75.34.75.75 0 .42-.33.75-.75.75H2.778a.295.295 0 0 0-.293.343c.382 2.205 1.242 4.014 2.552 4.435v3.716a.75.75 0 0 0 .75.75h.001l15.213-.02a.75.75 0 0 0 .749-.75v-10.5c0-.018-.009-.032-.01-.05z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.39 7.957c-.27.05-.5.26-.57.54-.24.88-.24 1.77 0 2.65.08.29.3.48.57.53.05.01.1.02.15.02.06 0 .13 0 .2-.02.4-.11.63-.52.52-.92-.17-.63-.17-1.24 0-1.87a.745.745 0 0 0-.87-.93"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTowel2Bold;
