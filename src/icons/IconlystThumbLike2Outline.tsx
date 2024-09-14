import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLike2Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.284 2.875h.048c.22.002.483.013.709.06.946.194 1.736.879 2.058 2.077.28 1.04.205 2.444-.322 4.275h.518c.96 0 1.73 0 2.343.053.625.055 1.174.17 1.655.46a3.6 3.6 0 0 1 1.602 2.09c.153.54.122 1.1.012 1.717-.108.606-.308 1.35-.558 2.277l-.491 1.82-.038.14c-.236.876-.409 1.519-.786 2.016-.346.456-.808.81-1.338 1.025-.578.235-1.244.234-2.152.234h-4.459c-.298 0-.518 0-.738-.03a3 3 0 0 1-.595-.143c-.21-.072-.406-.172-.672-.307l-.04-.02-2.468-1.254a.75.75 0 0 1 .679-1.337l2.468 1.253c.322.164.422.212.52.246q.155.053.315.075c.104.015.215.017.576.017h4.27c1.116 0 1.46-.014 1.732-.124.28-.114.524-.3.707-.542.177-.233.28-.562.57-1.64l.482-1.785c.262-.97.444-1.65.54-2.184.093-.528.083-.824.021-1.042a2.1 2.1 0 0 0-.932-1.217c-.194-.117-.478-.204-1.012-.25-.54-.048-1.244-.048-2.249-.048H15.19c-.062 0-.15 0-.227-.007a.96.96 0 0 1-.43-.136.95.95 0 0 1-.422-.58 1 1 0 0 1 .002-.454c.018-.076.045-.16.064-.22l.004-.013c.639-1.984.668-3.238.47-3.976-.184-.682-.554-.924-.912-.997a2.4 2.4 0 0 0-.414-.028c-.148-.001-.22 0-.276.003a.2.2 0 0 0-.057.009.4.4 0 0 0-.102.061v.002q-.003 0-.006.007l-.035.052a6 6 0 0 0-.166.313c-.438.856-1.185 2.25-1.98 3.438-.396.591-.82 1.158-1.24 1.586-.21.214-.438.412-.677.56-.233.145-.533.278-.875.278a.75.75 0 0 1-.02-1.5.5.5 0 0 0 .103-.051c.102-.064.236-.173.398-.338.324-.33.69-.809 1.064-1.37.746-1.114 1.462-2.447 1.892-3.287l.03-.059c.124-.242.255-.5.466-.705.184-.18.432-.33.675-.41.278-.093.532-.091.765-.09"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.478 7.969h.206c.366 0 .685 0 .948.02.278.023.559.073.83.208.42.21.76.551.97.971.136.272.186.552.208.83.021.263.021.582.021.948v7.199c0 .366 0 .685-.02.948a2.2 2.2 0 0 1-.208.83c-.21.42-.55.76-.97.97a2.2 2.2 0 0 1-.831.208c-.263.021-.582.021-.948.021h-.206c-.367 0-.686 0-.949-.02a2.2 2.2 0 0 1-.83-.209c-.42-.21-.76-.55-.97-.97a2.2 2.2 0 0 1-.208-.83c-.021-.263-.021-.582-.021-.948v-7.199c0-.366 0-.685.021-.948.022-.278.072-.558.208-.83.21-.42.55-.76.97-.97.272-.136.552-.186.83-.208.263-.021.582-.021.949-.021M4.65 9.485c-.188.015-.252.04-.28.054a.67.67 0 0 0-.3.3c-.013.027-.039.092-.054.28-.015.195-.016.453-.016.856v7.141c0 .403 0 .661.016.857.015.187.04.252.055.28.064.129.17.234.299.299.028.014.092.039.28.054.195.016.453.016.856.016h.15c.402 0 .66 0 .856-.016.187-.015.252-.04.28-.054a.67.67 0 0 0 .299-.3c.014-.027.04-.092.054-.28.016-.195.016-.453.016-.856v-7.141c0-.403 0-.661-.016-.857-.015-.187-.04-.252-.054-.28a.67.67 0 0 0-.3-.299c-.027-.014-.092-.039-.28-.054a12 12 0 0 0-.855-.016h-.15c-.403 0-.66 0-.856.016"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThumbLike2Outline;
